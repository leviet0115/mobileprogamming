import { View, TextInput, Button, FlatList, Text } from "react-native";
import React from "react";
import { Styles } from "./Styles";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import uuid from "react-native-uuid";
import { async } from "@firebase/util";
import { isAsyncDebugging } from "react-native/Libraries/Utilities/DebugEnvironment";

const App = () => {
  const [prod, setProd] = React.useState("");
  const [amt, setAmt] = React.useState("");
  const [list, setList] = React.useState([]);

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
  const db = getDatabase(app);

  React.useEffect(() => {
    const itemRef = ref(db, "items/");
    onValue(itemRef, (snapshot) => {
      const data = snapshot.val();
      setList(Object.values(data));
    });
  }, []);

  const saveItem = async () => {
    const id = prod + amt + Date.now().toString();
    const res = await set(ref(db, "items/" + id), {
      amt,
      prod,
      id,
    });
  };

  return (
    <View style={Styles.container}>
      <TextInput
        placeholder="Product"
        value={prod}
        onChangeText={(text) => setProd(text)}
        style={Styles.input}
      />
      <TextInput
        placeholder="Amount"
        valu={amt}
        onChangeText={(text) => setAmt(text)}
        style={Styles.input}
      />
      <Button title="Save" onPress={saveItem}></Button>
      <FlatList
        data={list}
        renderItem={(item) => <Item item={item.item} />}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{ marginTop: 10 }}
      />
    </View>
  );
};

const Item = ({ item }) => {
  return (
    <View style={Styles.row}>
      <Text>{item.prod}, </Text>
      <Text>{item.amt}</Text>
    </View>
  );
};

export default App;
