import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PositionScreen } from './PositionScreen';
export const TareaScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
            <View style={styles.cajaAzul} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'row',
    },
    cajaMorada: {
        backgroundColor: "#5856D6",
        width: 100,
        height: 100,
        borderWidth: 10, 
        borderColor: 'white',
    },
    cajaNaranja: {
        backgroundColor: "#F0A23B",
        width: 100,
        height: 100,
        borderWidth: 10, 
        borderColor: 'white',
    },
    cajaAzul: {
        backgroundColor: "#28C4D9",
        width: 100,
        height: 100,
        borderWidth: 10, 
        borderColor: 'white',
    },
});