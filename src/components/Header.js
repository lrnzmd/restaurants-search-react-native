import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.lightHeader}>Grab your</Text>
            <Text style={styles.boldtHeader}>delicous meal!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginHorizontal: 25,
    },
    lightHeader: {
        fontSize: 35,
    },
    boldtHeader: {
        fontSize: 40,
        fontWeight: 'bold',
    }
})