import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";

export default function App() {
  const [guess, setGuess] = useState("");
  const [random, setRandom] = useState(Math.floor(Math.random() * 100) + 1);
  const [msg, setMsg] = useState("This is a new round.");
  const [guessCount, setCount] = useState(0);

  console.log(random);

  const newGame = () => {
    setMsg("");
    setGuess("");
    setRandom(Math.floor(Math.random() * 100) + 1);
  };

  const onGuess = () => {
    setCount((count) => count + 1);
    let num = Number(guess);
    if (num < random) {
      setMsg(`You guess ${guess} is too low.`);
    } else if (num > random) {
      setMsg(`Your guess ${guess} is too high.`);
    } else if (num === random) {
      Alert.alert(
        "You win!!!",
        `You guessed the number in ${guessCount} guesses`,
        [{ text: "New game", onPress: newGame }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text>Guess a number between 1 - 100</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={guess}
        onChangeText={(input) => setGuess(input)}
      />
      <Text style={styles.message}>{msg}</Text>
      <Button title="Make guess" onPress={onGuess} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "50%",
  },

  input: {
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 2,
    width: "10%",
  },

  button: {
    marginTop: 10,
  },

  message: {
    color: "red",
    marginTop: 10,
  },
});
