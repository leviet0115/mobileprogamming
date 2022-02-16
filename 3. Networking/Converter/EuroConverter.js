import { useEffect, useState } from "react";
import { Alert, TextInput, View, Text, Button, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Styles } from "./Styles";
import Euro from "./Euro";

export default function App() {
  const [before, setBefore] = useState("0");
  const [after, setAfter] = useState("0");
  const [currency, setCurrency] = useState("USD");
  const [rates, setRates] = useState([]);

  useEffect(() => {
    fetch(
      "http://api.exchangeratesapi.io/v1/latest?access_key=e7b8647bc8f0c31f60cd23dcfcb1d48e"
    )
      .then((res) => res.json())
      .then((data) => setRates(data.rates))
      .catch((err) => {
        console.error(err);
        Alert.alert("Error: try again later");
      });
  }, []);

  const convert = () => {
    const euro = rates[currency] * Number(before);
    setAfter(euro.toFixed(2));
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Coverting other currencies to EUR:</Text>
      <View>
        <View style={Styles.inputBox}>
          <TextInput
            style={Styles.input}
            value={before}
            onChangeText={(number) => setBefore(number)}
            keyboardType="numeric"
          />
          <Picker
            selectedValue={currency}
            style={Styles.picker}
            onValueChange={(itemValue) => setCurrency(itemValue)}
          >
            {Object.keys(rates).map((rate, index) => (
              <Picker.Item label={rate} value={rate} key={index}></Picker.Item>
            ))}
          </Picker>
        </View>
        <Button title="Convert" onPress={convert}></Button>
        <Euro euro={after}></Euro>
      </View>
    </View>
  );
}
