import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>BoxObjectModel Example</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    title: {
        padding: 10,
        fontSize: 20, 
        backgroundColor: 'red',
        //width: 150,
        borderWidth: 10,
    }
});