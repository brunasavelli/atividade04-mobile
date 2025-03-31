import { Text, TouchableOpacity, StyleSheet } from "react-native"

export default function Card({ people, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.name}>{people ? people.name : "Nome"}</Text>
            <Text>{people ? people.role : "Descrição"}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        height: 60,
        alignItems: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});