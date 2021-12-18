import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TouchableNativeFeedbackBase, TouchableNativeFeedback, Platform } from 'react-native';

interface IControl {
    ControlHandler: () => {} //or function,
    ButtonColor: Object,
    ControlLocation: Object,
    Title: String,
}

export const Controls = ({ControlHandler, ButtonColor, Title, ControlLocation}: IControl) => {

    const iOS = () =>{
        return (
            <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => ControlHandler()}
            style={ControlLocation}
            >
                <View style={[styles.ControlWrapper, ButtonColor]}>
                    <Text style={styles.buttonText}>{Title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    const androidOS = () => {
        return (
            <TouchableOpacity
            onPress={() => ControlHandler()}
            style={ControlLocation}
            >
                <TouchableNativeFeedback
                onPress={() => ControlHandler()}
                background={ TouchableNativeFeedback.Ripple("#28425B", false)}
                >
                    <View style={[styles.ControlWrapper, ButtonColor]}>
                        <Text style={styles.buttonText}>{Title}</Text>
                    </View>
                </TouchableNativeFeedback>
                
            </TouchableOpacity>
        );
    }

    return (Platform.OS === 'ios') ? iOS() : androidOS();
    
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