import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

export default function Card({children}) {
  return (
    <View style={styles.card}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 24,
        padding: 16,
        marginTop: 100,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, // android
        shadowColor: "black", // ios
        shadowOffset: {
          // ios
          height: 2,
          width: 0,
        },
        shadowRadius: 6, // ios
        shadowOpacity: 0.25, // ios
    }
})