import React, { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import Card from "../components/Card";

import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = (props) => {
  const [inputValue, setInputValue] = useState("");
  const inputHandler = (entered) => {
    setInputValue(entered);
  };

  const resetValue = () => {
    setInputValue("");
  };

  const confirmHandler = () => {
    const inputNum = parseInt(inputValue);

    if (isNaN(inputNum) || inputNum <= 0 || inputNum > 99) {
      Alert.alert("유효하지 않은 값", "1이상 99이하의 숫자를 입력해주세요!", [{ text: "Ok", style: "destructive", onPress: resetValue }]);
      return;
    }

    props.onValue(inputNum);
    props.onSwitch();
  };

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>나의 숫자를 맞춰봐</Text>
      <Card>
        <Text style={styles.desc}>숫자를 입력하세요!</Text>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={inputValue}
          onChangeText={inputHandler}
        />
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={resetValue}>Reset</PrimaryButton>
          <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#fff",
    padding: 12,
  },
  desc: {
    color: "#ddb52f",
    fontSize: 24,
    paddingTop: 20,
  },
});

export default StartGameScreen;
