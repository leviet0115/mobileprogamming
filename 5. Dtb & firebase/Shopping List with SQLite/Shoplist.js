import { View, TextInput, Button, FlatList, Text } from "react-native";
import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, onValue } from "firebase/database";
import React from "react";
import * as SQLite from "expo-sqlite";
import { Styles } from "./Styles";

const App = () => {
  const [prod, setProd] = React.useState("");
  const [amt, setAmt] = React.useState("");
  const [list, setList] = React.useState([]);

  const db = SQLite.openDatabase("shoplistdb.db");

  React.useEffect(() => {
    const createTable =
      "create table if not exists shoplist (id integer primary key not null, product text, amount text);";

    db.transaction(
      (tx) => {
        tx.executeSql(createTable);
      },
      null,
      updateList
    );
  }, []);

  const saveItem = () => {
    const insertItem = "insert into shoplist (product, amount) values (?, ?);";
    console.log(prod, amt);

    db.transaction(
      (tx) => {
        tx.executeSql(insertItem, [prod, amt]);
      },
      null,
      updateList
    );
  };

  const updateList = () => {
    db.transaction(
      (tx) => {
        tx.executeSql("select * from shoplist;", [], (_, { rows }) =>
          setList(rows._array)
        );
      },
      null,
      null
    );
  };

  const deleteItem = (id) => {
    db.transaction(
      (tx) => {
        tx.executeSql("delete from shoplist where id = ?;", [id]);
      },
      null,
      updateList
    );
  };

  return (
    <View style={Styles.container}>
      <TextInput
        placeholder="Product"
        value={prod}
        onChangeText={setProd}
        style={Styles.input}
      />
      <TextInput
        placeholder="Amount"
        valu={amt}
        onChangeText={setAmt}
        style={Styles.input}
      />
      <Button title="Save" onPress={saveItem}></Button>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={Styles.row}>
            <Text>
              {item.product}, {item.amount}
            </Text>
            <Text style={Styles.link} onPress={() => deleteItem(item.id)}>
              Bought
            </Text>
          </View>
        )}
        data={list}
      />
    </View>
  );
};

export default App;
