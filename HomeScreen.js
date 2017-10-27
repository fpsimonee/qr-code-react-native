import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View, Navigator} from 'react-native';
import BarCode from './BarcodeScannerExample';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Welcome"
  }

  render() {
    const { navigate } = this.props.navigation;
    // const { QrCode } = this.state.QrCode;

    // if (this.state.QrCode != null) {
      return (
        //     <View style = {{flex: 1, alignItems: 'center', marginTop: 100}}>
        //     <Text>Bem ao APP teste de QrCode</Text>  
        //       <TouchableHighlight
        //         onPress={() => navigate('BarCode')}
        //         style={[{backgroundColor: '#7567B1'}]} >
        //           <Text>Ler QrCode</Text>
        //       </TouchableHighlight>
        //       <Text>this.state.QrCode</Text>
        //   </View>
        // )
        //   }else{
        // return (
        <View style={styles.container}>
          <Text style={styles.textoInicial}>Bem ao APP teste de QrCode</Text>
          <TouchableHighlight
            onPress={() => navigate('BarCode')}
            style={styles.button} >
            <Text style={styles.textoBotao}>Ler QrCode</Text>
          </TouchableHighlight>
          <Text style={styles.textoInicial}>Você ainda não scaneou o QRcode</Text>
        </View>
      )
      //       }
      // ;
    }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {height: 50, width: 100, padding: 10, backgroundColor: '#7567B1'},
  textoBotao: {
    padding: 5,
    fontFamily: 'Cochin',
    fontSize: 12,
    fontWeight: 'bold',
  },
  textoInicial: {
    margin: 20,
    fontFamily: 'Cochin',
    fontSize: 12,
    fontWeight: 'bold',
  }
})