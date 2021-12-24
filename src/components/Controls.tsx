import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TouchableNativeFeedback, Platform } from 'react-native';

interface IControl {
    ControlHandler: Function,// or () => {},
    Title: String,
    Position?: 'br' | 'bl',
}

export const Controls = ({Position = 'br', ControlHandler, Title, ControlLocation}: IControl) => {

    const iOS = () =>{
        return (
            <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => ControlHandler()}
            style={Position === 'br' ? styles.ButtonWrapperPlus : styles.ButtonWrapperLess}
            >
                <View style={[styles.ControlWrapper, (Position === 'br') ? styles.ButtonPlus : styles.ButtonLess]}>
                    <Text style={styles.buttonText}>{Title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    const androidOS = () => {
        return (
            <TouchableOpacity
            onPress={() => ControlHandler()}
            style={Position === 'br' ? styles.ButtonWrapperPlus : styles.ButtonWrapperLess}
            >
                <TouchableNativeFeedback
                onPress={() => ControlHandler()}
                background={ TouchableNativeFeedback.Ripple("#28425B", false)}
                >
                    <View style={[styles.ControlWrapper, (Position === 'br') ? styles.ButtonWrapperPlus : styles.ButtonWrapperLess]}>
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
    ButtonLess: {
        backgroundColor: "#eb144c",
    },
    ButtonPlus: {
        backgroundColor: "#03a9f4",
    },
    ButtonWrapperLess: {
        position: 'absolute',
        bottom: 0,
        left: 5,
    },
    ButtonWrapperPlus: {
        position: 'absolute',
        bottom: 0,
        right: 5,
    }
});