import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const [result, setResult] = useState(null);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [history, setHistory] = useState([]);

  const addPressed = () => {
    let sum = Number(num1) + Number(num2);
    setResult(sum);
    setHistory([...history, { record: `${num1} + ${num2} = ${sum}` }]);
  };

  const subtractPressed = () => {
    let dif = Number(num1) - Number(num2);
    setResult(dif);
    setHistory([...history, { record: `${num1} - ${num2} = ${dif}` }]);
  };

  console.log(history);
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
      <View style={styles.historyDiv}>
        <Text>History</Text>
        <FlatList
          data={history}
          renderItem={({ item }) => (
            <Text style={styles.listItem}>{item.record}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
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
    marginTop: 100,
  },

  input: {
    borderWidth: 1,
    marginTop: 2,
    paddingLeft: 2,
    width: 200,
  },

  buttonDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "10%",
    marginTop: 10,
  },

  historyDiv: {
    alignItems: "center",
    marginTop: 20,
  },

  listItem: {
    textAlign: "center",
  },
});
