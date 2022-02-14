import { Styles } from "./Styles";
import { Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

const Calculator = ({ navigation }) => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);
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

  return (
    <View style={Styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        style={Styles.input}
        keyboardType="numeric"
        placeholder="Enter a number"
        value={num1}
        onChangeText={(input) => setNum1(input)}
      />
      <TextInput
        style={Styles.input}
        keyboardType="numeric"
        placeholder="Enter another number"
        value={num2}
        onChangeText={(input) => setNum2(input)}
      />
      <View style={Styles.buttonDiv}>
        <Button title="+" onPress={addPressed} />
        <Button title="-" onPress={subtractPressed} />
        <Button
          title="History"
          onPress={() => navigation.navigate("History", { history: history })}
        />
      </View>
    </View>
  );
};

export default Calculator;
