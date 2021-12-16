import { View } from 'react-native';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import React from 'react';
import { CounterScreen } from './src/screens/components/CounterScreen';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <HolaMundoScreen /> */}
     <CounterScreen /> 
    </View>
  );
}

export default App;