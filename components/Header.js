import React from 'react';
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Filmes</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#900',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginBottom: 30,
    },
    title: {
        color: '#fff',
        fontSize: '22px',
    }
});