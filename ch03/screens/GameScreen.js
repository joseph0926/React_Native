import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../components/Card";
import NumContainer from "../components/game/NumContainer";
import PrimaryButton from "../components/PrimaryButton";

const randomNum = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return randomNum(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minValue = 1;
let maxValue = 100;

const GameScreen = (props) => {
  const initValue = randomNum(1, 100, props.inputValue);
  const [currentValue, setCurrenValue] = useState(initValue);
  const [guessRounds, setGuessRounds] = useState([initValue]);

  useEffect(() => {
    if (currentValue === props.inputValue) {
      props.onSwitch(guessRounds.length);
    }
  }, [currentValue]);

  useEffect(() => {
    minValue = 1;
    maxValue = 100;
  }, []);

  const nextValueHandler = (direction) => {
    if ((direction === "lower" && currentValue < props.inputValue) || (direction === "higher" && currentValue > props.inputValue)) {
      Alert.alert("오류", "제대로된 방향을 지시해주세요!", [{ text: "Sorry!", style: "cancel" }]);
      return;
    }

    if (direction === "lower") {
      maxValue = currentValue;
    } else {
      minValue = currentValue + 1;
    }
    const newNum = randomNum(minValue, maxValue, currentValue);
    setCurrenValue(newNum);
    setGuessRounds((prevGuessRounds) => [...prevGuessRounds, newNum]);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>컴퓨터의 추측</Text>
      <NumContainer>{currentValue}</NumContainer>
      <Card>
        <Text style={styles.desc}>Higher or Lower?</Text>
        <View style={styles.btn}>
          <PrimaryButton onPress={nextValueHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={nextValueHandler.bind(this, "higher")}>
            <Ionicons name="md-add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </Card>
      <View>
        {/* {guessRounds.map((g) => {
          return <Text key={g}>{g}</Text>;
        })} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => {
            return <Text>{itemData.item}</Text>;
          }}
          keyExtractor={(item) => {
            item;
          }}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
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
  btn: {
    flexDirection: "row",
    alignItems: "center",
  },
  desc: {
    color: "#ddb52f",
    fontSize: 24,
    paddingVertical: 20,
  },
});

export default GameScreen;
