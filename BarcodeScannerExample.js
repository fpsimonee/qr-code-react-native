import {BarCodeScanner, Permissions} from 'expo';
import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import { NavigationActions } from 'react-navigation';

import HomeScreen from './HomeScreen';

export default class BarcodeScannerExample extends React.Component {
  state = {hasCameraPermission: null, qrCode: null}

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  _handleBarCodeRead = ({type, data}) => {
    const {navigate} = this.props.navigation;
    Alert.alert(
        'Alert Title',
        `Bar code with type ${type} and data ${data} has been scanned!`, [{
          text: 'Teste',
          onPress: () => {
            NavigationActions.navigate('HomeScreen')
          }
        }],
        {cancelable: true});
    this.setState({
      qrCode: data
    });
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
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  }


}

