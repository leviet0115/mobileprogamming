import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [result, setResult] = useState(null);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const addPressed = () => {
    setResult(Number(num1) + Number(num2));
  };

  const subtractPressed = () => {
    setResult(Number(num1) - Number(num2));
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter a number"
        value={num1}
        onChangeText={(input) => setNum1(input)}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter another number"
        value={num2}
        onChangeText={(input) => setNum2(input)}
      />
      <View style={styles.buttonDiv}>
        <Button title="+" onPress={addPressed} />
        <Button title="-" onPress={subtractPressed} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "20%",
  },

  input: {
    borderWidth: 1,
    marginTop: 2,
    paddingLeft: 2,
    width: "50%",
  },

  buttonDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "10%",
    marginTop: 10,
  },
});
