import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { elevation } from './common/styles'

const Search = () => {
  return (
    <View style={[styles.container, styles.elevation]}>
        <FontAwesome name="search" size={25}/>
        <TextInput style={styles.input} placeholder="Restaurants, food"/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 25,
        backgroundColor: 'white',

        padding: 15,
        borderRadius: 40,
    },
    elevation,
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: '100%',
    }
})

export default Search