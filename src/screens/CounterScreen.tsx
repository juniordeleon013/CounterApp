import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { UseCounter } from '../Hooks/UseCounter';
import { Controls } from '../components/Controls';
export const CounterScreen = () => {
    const {counter, AddPoint, RemovePoint} = UseCounter();


    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>Counter: {counter}</Text>
            <Controls 
            Position="bl" 
            Title="-1" 
            ControlHandler={RemovePoint}/>
            <Controls 
            Position="br"  
            Title="+1" 
            ControlHandler={AddPoint} />
        </View>
    );
    
    
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#28C4D9',
    },
    Title: {
        fontSize: 40,
        top: -100,
        fontWeight: "bold",
        textAlign: "center"
    },
});