import { Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Title({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      color: "#ddb52f",
      fontWeight: "bold",
      textAlign: "center",
      borderColor: "#ddb52f",
      borderWidth: 2,
      padding: 12,
    },
  });
  