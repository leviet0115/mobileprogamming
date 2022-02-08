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
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const onAdd = () => {
    setList([...list, item]);
    setItem("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter an item"
        value={item}
        onChangeText={(input) => setItem(input)}
      />
      <View style={styles.buttonDiv}>
        <Button title="Add" onPress={onAdd} />
        <Button title="Clear" onPress={() => setList([])} />
      </View>
      <View style={styles.historyDiv}>
        <Text style={styles.listTitle}>Shopping List</Text>
        <FlatList
          data={list}
          renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
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
    alignItems: "center",
    marginTop: 10,
  },

  historyDiv: {
    alignItems: "center",
    marginTop: 20,
  },

  listItem: {
    textAlign: "center",
  },

  listTitle: {
    color: "blue",
    fontWeight: "700",
  },
});
