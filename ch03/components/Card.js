import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Card = (props) => {
  return <View style={styles.start_container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  start_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4e0329",
    paddingHorizontal: 12,
    marginTop: 36,
    marginHorizontal: 24,
    paddingBottom: 16,
    borderRadius: 10,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
});

export default Card;
