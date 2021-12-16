import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export const HolaMundoScreen = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.myText}>
        Hola mundo Mi nombre es Jun
      </Text>
    </View>
  );
}

const styles = StyleSheet.create( {
  Container: {
    flex:1,
    justifyContent: 'center'
  },
  myText: {
    fontSize: 30,
    textAlign: "center" 
  },
});