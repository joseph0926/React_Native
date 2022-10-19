import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = (props) => {
  const pressHandler = () => {};

  return (
    <View style={styles.btn_outer_container}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
        style={({ pressed }) => {
          return pressed ? [styles.btn_inner_container, styles.pressed] : styles.btn_inner_container;
        }}
      >
        <Text style={styles.btn_Text}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btn_outer_container: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    backgroundColor: "#72063c",
    width: 150,
    height: 40,
  },
  btn_inner_container: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    elevation: 2,
  },
  btn_Text: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
