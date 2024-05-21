import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  SafeAreaView,
  FlatList,
  Button,
} from "react-native";

import Cat from "../../assets/cat.jpg";

const Jogadores = [
  {
    id: 1,
    nome: "Cristiano Ronaldo",
    number: 7,
  },
  {
    id: 2,
    nome: "Van Dijk",
    number: 4,
  },
  {
    id: 3,
    nome: "Neymar",
    number: 10,
  },
  {
    id: 4,
    nome: "Ronaldo Fenomeno",
    number: 9,
  },
];

const renderItem = ({ item }) => (
  <View>
    <Text>
      {item.number} - {item.nome}
    </Text>
  </View>
);

const HomeScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Cat} style={styles.cat} />
      <Text style={styles.text}>Gato!</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Label</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Tamo junto!"
        />
      </View>
      <FlatList
        data={Jogadores}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Go to Images"
        onPress={() => navigation.navigate('Images')}
      />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate('Colors')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "red",
    fontSize: 22,
  },
  cat: {
    width: 50,
    height: 50,
  },
  inputGroup: {
    padding: 20,
  },
  label: {
    fontSize: 18,
  },
  input: {
    width: "90%",
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderColor: "#ccc",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});

export default HomeScreen;
