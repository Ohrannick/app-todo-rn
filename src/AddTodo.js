import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Alert } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Название не может быть пустым...");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Введите значение..."
        autoCorrect={false}
        autoCapitalize="none"
        autoFocus="true"
        keyboardType="email-address"
      />
      <Button style={styles.button} title="Добавить" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#3949ab",
  },
  button: {},
});
