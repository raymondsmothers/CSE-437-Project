import {
  Viro3DObject,
  ViroAnimations,
  ViroARScene,
  ViroARSceneNavigator,
  ViroBox,
  ViroMaterials,
} from '@viro-community/react-viro';
import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {
  Web3ProviderContext,
  GeocacheContractContext,
  CacheMetadataContext,
} from '../App';
import {useWalletConnect} from '@walletconnect/react-native-dapp';
import {ethers} from 'ethers';
import MessageModal from './MessageModal';
import * as CONTRACT_ADDRESSES from '../contract_info/contractAddressesGoerli';
import TriviaModal from './TriviaModal';
const globalStyles = require('../styles');
export const MintingContext = React.createContext({});

const ARVisionScene = () => {

  const {hasMintedItem, setHasTriggeredTrivia} =
    useContext(MintingContext);



  const initialPosition = [0, -0.5, -1];
  const objectScale = [10, 10, 10];
  return (
    <ViroARScene>
      {/* <ViroARScene onTrackingUpdated={onInitialized}> */}
      {/* {false && */}
      {!hasMintedItem &&
      <ViroBox
        position={[0, -0.5, -1]}
        animation={{name: 'rotate', run: true, loop: true}}
        scale={[0.3, 0.3, 0.1]}
        materials={['grid']}
        // onClick={(position, source) => console.log('Click', position, source)}
        onClick={(position, source) => {
          setHasTriggeredTrivia(true)
          // Alert.alert(
          //   'Congratulations!',
          //   'Would you like to claim this item?',
          //   [
          //     {
          //       text: 'No',
          //       onPress: () => console.log("Nah, I'm good"),
          //     },
          //     {
          //       text: 'Yes',
          //       onPress: () => mintItemInGeocache(),
          //     },
          //   ],
          // );
        }}
        dragType="FixedDistance"
        dragPlane={{
          planePoint: [0, -1, 0],
          planeNormal: [0, 1, 0],
          maxDistance: 500,
        }}
      />}
    </ViroARScene>
  );
};

export default () => {
  const [isMintingItem, setIsMintingItem] = useState(false);
  const [hasMintedItem, setHasMintedItem] = useState(false);
  const [transactionHash, setTransactionHash] = useState()
  const [isTransactionDelayed, setIsTransactionDelayed] = useState(false)
  const [newGeocacheId, setNewGeocacheId] = useState()
  const [errorMessage, setErrorMessage] = useState();
  const [hasCorrectlyAnsweredTrivia, setHasCorrectlyAnsweredTrivia] = useState(false)
  const [triviaIsVisible, setTriviaIsVisible] = useState(false)
  const providersAndSigners = useContext(Web3ProviderContext);
  const GeocacheContract = useContext(GeocacheContractContext);
  const {cacheMetadata, setCacheMetadata} = useContext(CacheMetadataContext);
  const connector = useWalletConnect();
  

  useEffect(() => {
    GeocacheContract.on('GeocacheItemMinted', geocacheItemMintedCallback);
    // console.log('priv: ' + providersAndSigners.cacheItSigner.address);
  });

  //This callback is wrong, the CAcheIt wallet is always sending the transaction
  const geocacheItemMintedCallback = (
    receiverAddress,
    geocacheId,
    geocacheItemId,
  ) => {
    receiverAddress = receiverAddress.toLocaleLowerCase();
    // console.log('creatorAddress: ' + creatorAddress);

    if (receiverAddress == connector.accounts[0]) {
    // if (geocacheId === cacheMetadata.geocacheId) {
      setNewGeocacheId(geocacheId)
      console.log('callback triggered');
      setIsMintingItem(false);
      setHasMintedItem(true);
      setIsTransactionDelayed(false);
    }
  };

  const mintItemInGeocache = async () => {
    setIsMintingItem(true);
    const cacheItSigner = providersAndSigners.cacheItSigner;
    const geocacheId = cacheMetadata?.geocacheId;
    const userAddress = connector.accounts[0];
    // console.log("User's address is ", userAddress);

    // Calling the contract function as contract owner
    const geocacheContractWithSigner = await GeocacheContract.connect(
      cacheItSigner,
    )
    // var selectedGeocacheItemLocations =;
    const mintItemInGeocacheTxn = await geocacheContractWithSigner
      .mintItemInGeocache(geocacheId, userAddress, {
        gasLimit: 10000000,
      })
      .then(res => {
        console.log('Success: ' + JSON.stringify(res, null, 2));
        // alert(`Successfully minted item for user ${userAddress}`);
        setTransactionHash(res.hash)
        setTimeout(() => {
          // console.log("DELAYED")
          setIsTransactionDelayed(true && !hasMintedItem)
        }, 15000)
      })
      .catch(error => {
        // alert('Error minting item: ' + error.message);
        console.log('Error in MintTXn: ' + error.message);
        setErrorMessage(error?.message);
        setIsMintingItem(false);
      });
  };

  const resetState = () => {
    setErrorMessage(undefined)
    setIsMintingItem(false)
  }
  //  available context in this file
  MintingContextValue = {
    setIsMintingItem: setIsMintingItem,
    setHasMintedItem: setHasMintedItem,
    setErrorMessage: setErrorMessage,
    setTransactionHash: setTransactionHash,
    setIsTransactionDelayed: setIsTransactionDelayed,
    setNewGeocacheId: setNewGeocacheId,
    setHasTriggeredTrivia: setTriviaIsVisible,
    hasMintedItem: hasMintedItem
  };
  return (
    <MintingContext.Provider value={MintingContextValue}>
      <View style={styles.f1}>
        <ViroARSceneNavigator
          autofocus={false}
          initialScene={{
            // scene: () => {return(<></>)},
            scene: ARVisionScene,
          }}
          style={{flexGrow: 1, flex: 3}}
        />
        {triviaIsVisible && (
          // <TriviaModal mintItemInGeocache={mintItemInGeocache} setHasCorrectlyAnsweredTrivia={setHasCorrectlyAnsweredTrivia}></TriviaModal>
          <TriviaModal mintItemInGeocache={mintItemInGeocache} setModalVisible={setTriviaIsVisible} modalVisible={triviaIsVisible} ></TriviaModal>
        )}
        {isMintingItem && (
          <MessageModal
            style={globalStyles.messageModal}
            title={'Correct!'}
            isProgress={true}
            isTransactionDelayed={isTransactionDelayed}
            transactionHash={transactionHash}
            resetParentState={resetState}
            body={' Now minting your item. Please wait.'}
          />
        )}
        {errorMessage && (
          <MessageModal
            style={globalStyles.messageModal}
            title={'Error'}
            body={errorMessage}
            resetParentState={resetState}
          />
        )}
        {
          hasMintedItem && (
            <MessageModal
              style={globalStyles.messageModal}
              title={'Success!'}
              // isProgress={true}
              isTransactionDelayed={false}
              transactionHash={transactionHash}
              resetParentState={resetState}
              //TODO add open sea url
              // openSeaURL={"https://testnets.opensea.io/" + connector.accounts[0]}
              openSeaURL={"https://testnets.opensea.io/assets/goerli/" + CONTRACT_ADDRESSES.Geocache1155 + "/" + newGeocacheId}
              body={'Nice! Your item has finished minting.'}
            />
          )
        }
      </View>
    </MintingContext.Provider>
  );
};

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('../grid_bg.jpg'),
  },
});

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: '+=90',
    },
    duration: 250, //.25 seconds
  },
});
var styles = StyleSheet.create({
  f1: {flex: 1},
  container: {
    ...StyleSheet.absoluteFillObject,
    //   height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
