import {BarCodeScanner, Permissions} from 'expo';
import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
// import { NavigationActions } from 'react-navigation';

import BarcodeScanner from 'react-native-barcodescanner';



import HomeScreen from './HomeScreen';

export default class BarcodeScannerExample extends React.Component {
  

  static navigationOptions = {
    title: 'HomeScreen',
  };
  
  state = { hasCameraPermission: null, qrCode: null };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  // _handlePress() {
  //   // const {navigate} = this.props.navigation;
  //   NavigationActions.navigate('HomeScreen')
  //   // this.props.navigation.navigate(
  //   //     'HomeScreen');
  // }

  _handleBarCodeRead = ({type, data}) => {
    Alert.alert(
        'Qr Code Read',
        `Bar code with type ${type} and data ${data} has been scanned!`, [{
          text: 'Teste',
          onPress: () => {
            navigate('HomeScreen')
          }
        }]);
    this.setState({ qrCode: data });
    console.log(this.state.qrCode);
  };



  render() {
    const {navigate} = this.props.navigation;
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container}>
          <BarCodeScanner 
            nav={navigate}  
            onBarCodeRead={this._handleBarCodeRead}
            style={styles.camera}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          />
        </View>
      );
    }
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    height: 300,
    width: 300,
    margin: 40,
    padding: 30,
    shadowColor: '#000',
    shadowOpacity: 1,
    borderColor: '#fff'
  }
});