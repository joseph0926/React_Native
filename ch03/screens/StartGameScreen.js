import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.start_container}>
      <TextInput style={styles.textInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
      <View style={styles.btnContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  start_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4e0329",
    paddingHorizontal: 12,
    marginTop: 100,
    marginHorizontal: 24,
    paddingBottom: 16,
    borderRadius: 10,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    textAlign: "center",
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
});

export default StartGameScreen;
