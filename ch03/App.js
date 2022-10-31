import React, { useState } from "react";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [showGameScreen, setShowGameScreen] = useState(false);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoad] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoad) {
    return <AppLoading></AppLoading>;
  }

  const switchScreenHandler = () => {
    setShowGameScreen(true);
  };
  const gameOverHandler = (numberOfRounds) => {
    setShowGameScreen(false);
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  const inputValueHandler = (input) => {
    setInputValue(input);
  };

  const startNewGame = () => {
    setInputValue(null);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen onSwitch={switchScreenHandler} onValue={inputValueHandler}></StartGameScreen>;

  if (showGameScreen) {
    screen = <GameScreen onSwitch={gameOverHandler} inputValue={inputValue}></GameScreen>;
  }

  if (gameIsOver && inputValue) {
    screen = <GameOverScreen userNumber={inputValue} roundsNumber={guessRounds} onStartNewGame={startNewGame}></GameOverScreen>;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
