import { Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Title({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
      fontFamily: "Shabnam-bold",
      fontSize: 24,
      color: 'white',
      // fontWeight: "bold",
      textAlign: "center",
      borderColor: 'white',
      borderWidth: 2,
      padding: 12,
    },
  });
  