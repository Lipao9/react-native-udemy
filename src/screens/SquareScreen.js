import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        if (change === "add" && red + COLOR_INCREMENT < 255) {
          setRed(red + COLOR_INCREMENT);
        }
        if (change === "remove" && red - COLOR_INCREMENT > 0) {
          setRed(red - COLOR_INCREMENT);
        }
        return;
      case "green":
        if (change === "add" && green + COLOR_INCREMENT < 255) {
          setGreen(green + COLOR_INCREMENT);
        }
        if (change === "remove" && green - COLOR_INCREMENT > 0) {
          setGreen(green - COLOR_INCREMENT);
        }
        return;
      case "blue":
        if (change === "add" && blue + COLOR_INCREMENT < 255) {
          setBlue(blue + COLOR_INCREMENT);
        }
        if (change === "remove" && blue - COLOR_INCREMENT > 0) {
          setBlue(blue - COLOR_INCREMENT);
        }
        return;
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <ColorCounter
        onAdd={() => setColor("red", "add")}
        onRemove={() => setColor("red", "remove")}
        color="Red"
      />
      <ColorCounter
        color="Green"
        onAdd={() => setColor("green", "add")}
        onRemove={() => setColor("green", "remove")}
      />
      <ColorCounter
        color="Blue"
        onAdd={() => setColor("blue", "add")}
        onRemove={() => setColor("blue", "remove")}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
