import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal: 24,
    padding: 16,
    marginTop: 100,
    backgroundColor: "#3b021f",
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
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    textAlign: "center",
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonContainer:{
    flexDirection: 'row',
    marginTop: 6
  }
});
