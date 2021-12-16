import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

interface IControl {
    ControlHandler: () => {} //or function,
    ButtonColor: Object,
    ControlLocation: Object,
    Title: String,
}

export const Controls = ({ControlHandler, ButtonColor, Title, ControlLocation}: IControl) => {
    return (
        <TouchableOpacity
        onPress={() => ControlHandler()}
        style={ControlLocation}
        >
            <View style={[styles.ControlWrapper, ButtonColor]}>
                <Text style={styles.buttonText}>{Title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 25,
        color: 'white',
        fontWeight: "bold",
        alignSelf: 'center',
    },
    ControlWrapper :{
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: "center",
    },
});