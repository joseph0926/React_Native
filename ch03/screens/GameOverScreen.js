import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Game Over!</Text>
      <View style={styles.imageContanier}>
        <Image style={styles.imgae} source={require("../assets/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        당신의 휴대폰이 <Text style={styles.highlight}>{props.roundsNumber}</Text>번의 시도만에{" "}
        <Text style={styles.highlight}>{props.userNumber}</Text>의 숫자인것을 맞췄습니다!
      </Text>
      <PrimaryButton onPress={props.onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
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
  imageContanier: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    margin: 36,
  },
  imgae: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highlight: {
    fontFamily: "open-sans",
    color: "red",
  },
});

export default GameOverScreen;
