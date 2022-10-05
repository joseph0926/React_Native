import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)} android_ripple={{color: "red"}} style={({pressed}) => pressed && styles.pressedItem}>
      <View style={styles.textOutput}>
        <Text style={styles.textOutputText}>{props.item.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  textOutput: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
  textOutputText: {
    color: "#fff",
  },
});
