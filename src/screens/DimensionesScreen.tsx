import React from 'react';
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';

//const { width, height} = Dimensions.get('window'); no es en tiempo real

export const DimensionesScreen = () => 
{
    const { height, width } = useWindowDimensions();
    return (
        <View>
            <View style={styles.container}>
                    <Text>
                        Dimensiones Screen
                    </Text>
                    <View style={{...styles.cajaMorada, width: width * 0.5}}/>
                    <View style={styles.cajaNaranja} />
            </View>
            <Text style={styles.title}>W:{width} H:{height}</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 300,
        backgroundColor: 'red',
    },
    cajaMorada: {
        backgroundColor: "#5856D6",
        width: '50%',
        height: '50%',
    },
    cajaNaranja: {
        backgroundColor: "#F0A23B",
    },
    title: {
        fontSize: 30,
        textAlign: "center"
    }

});