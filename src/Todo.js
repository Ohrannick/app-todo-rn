import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const Todo = ({ todo, onRemove }) => {
  // const longPressHandler = () => {
  //   onRemove(todo.id);
  // };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => console.log("I am press", todo.title, todo.id)}
      onLongPress={onRemove.bind(null, todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
});
