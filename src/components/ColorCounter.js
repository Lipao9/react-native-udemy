import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onAdd, onRemove }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onAdd()} title={`Add ${color}`} />
      <Button onPress={() => onRemove()} title={`Remove ${color}`} />
    </View>
  );
};

const syles = StyleSheet.create({});

export default ColorCounter;
