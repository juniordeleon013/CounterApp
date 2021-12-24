import { SafeAreaView, View } from 'react-native';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import React from 'react';
// import { TareaScreen } from './src/screens/TareaScreen';
// import { FlexScreen } from './src/screens/FlexScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { CounterScreen } from './src/screens/CounterScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { PositionScreen } from './src/screens/PositionScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#28C4D9' }}>
        {/* <HolaMundoScreen /> */}
      <CounterScreen /> 
      {/* <BoxObjectModelScreen/> */}
      {/* <DimensionesScreen  /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      {/* <TareaScreen /> */}
    </SafeAreaView>
  );
}

export default App;