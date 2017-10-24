import React from 'react';

import { TabNavigator} from 'react-navigation';

import BarCode from './BarcodeScannerExample';
import HomeScreen from './HomeScreen';

const App =
    TabNavigator({Home: {screen: HomeScreen}, BarCode: {screen: BarCode}}, {
      tabBarOptions: {
        activeTintColor: '#7567B1',
        labelStyle: {fontSize: 16, fontWeight: '600'}
      }
    });

export default App;