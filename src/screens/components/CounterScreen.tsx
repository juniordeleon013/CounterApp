import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { UseCounter } from '../Hooks/UseCounter';
import { Controls } from './Controls';
export const CounterScreen = () => {
    const {counter, AddPoint, RemovePoint} = UseCounter();


    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>Counter: {counter}</Text>
            <View style={styles.Wrapper}>
                <Controls ControlLocation={styles.ControlLocationBL} Title="-1" ControlHandler={RemovePoint} ButtonColor={styles.ButtonWrapperLess} />
                <Controls ControlLocation={styles.ControlLocationBR}  Title="+1" ControlHandler={AddPoint} ButtonColor={styles.ButtonWrapperPlus} />
            </View>
            
        </View>
    );
    
    
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "center",
        
    },
    Title: {
        fontSize: 40,
        top: -100,
        fontWeight: "bold",
        textAlign: "center"
    },
    ControlLocationBR:{
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    ControlLocationBL:{
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    ButtonWrapperLess: {
        backgroundColor: "#eb144c",
    },
    ButtonWrapperPlus: {
        backgroundColor: "#03a9f4",
    },
    Wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 5,
    },
});