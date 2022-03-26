import { View, TextInput, Button, FlatList, Text } from "react-native";
import React from "react";
import * as SQLite from "expo-sqlite";
import { Styles } from "./Styles";
import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, onValue } from "firebase/database";

const App = () => {
  const [prod, setProd] = React.useState("");
  const [amt, setAmt] = React.useState("");
  const [list, setList] = React.useState([]);

  const db = SQLite.openDatabase("shoplistdb.db");

  const firebaseConfig = {
    apiKey: "AIzaSyBNbOQorWjiEHsnTiL4mcR8sshAOI8WbJs",
    authDomain: "lv-shoplist-fb.firebaseapp.com",
    databaseURL:
      "https://lv-shoplist-fb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lv-shoplist-fb",
    storageBucket: "lv-shoplist-fb.appspot.com",
    messagingSenderId: "1007463364049",
    appId: "1:1007463364049:web:b547677856b358627e9cf0",
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  React.useEffect(() => {
    const itemsRef = ref(database, "items/");
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      setList(Object.values(data));
    });
  }, []);

  const saveItem = () => {
    push(ref(database, "items/"), { product: product, amount: amount });
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
          </View>
        )}
        data={list}
      />
    </View>
  );
};

export default App;
