import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, {text: enteredGoalText, id: Math.random().toString()}]);
  };

  const deleteGoalHandler = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => (
        goal.id !== id
      ))
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler}></GoalInput>
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={itemData => {
          return (
            <GoalItem item={itemData.item} onDeleteItem={deleteGoalHandler} id={itemData.item.id}></GoalItem>
          )
        }} 
        keyExtractor={(item, index) => {
          return item.id
        }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
