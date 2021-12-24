import { View, StyleSheet } from 'react-native';
import React from 'react';
export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View  style={styles.cajaVerde}/>
            <View  style={styles.cajaMorada}/>
            <View  style={styles.cajaNaranja}/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    cajaVerde: {
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        //position: 'absolute',
        //bottom: 0,
        //left: 0,
        //top: 0,
        //right: 0,
        ...StyleSheet.absoluteFillObject
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top:0,
        right: 0,
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right:0,
        bottom: 0,
    },
});