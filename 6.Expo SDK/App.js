import { View, TextInput, Button, FlatList, Text } from "react-native";
import React from "react";
import { Styles } from "./Styles";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import * as Contacts from "expo-contacts";
import uuid from "react-native-uuid";
import { async } from "@firebase/util";

const App = () => {
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
  const [contacts, setContacts] = React.useState([]);

  const getContact = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });

      setContacts(data);
    }
  };

  return (
    <View style={Styles.container}>
      {contacts.length === 0 ? null : (
        <FlatList
          data={contacts}
          renderItem={(item) => <Contact contact={item.item} />}
          keyExtractor={({ index }) => index}
        />
      )}

      <Button title="Get contacts" onPress={getContact}></Button>
    </View>
  );
};

const Contact = ({ contact }) => (
  <View style={Styles.row}>
    <Text>{contact.name}</Text>
    <Text>
      {contact.phoneNumbers &&
        contact.phoneNumbers[0] &&
        contact.phoneNumbers[0].digits}
    </Text>
  </View>
);

export default App;
