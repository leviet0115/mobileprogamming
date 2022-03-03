import { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { TextInput, View, Button } from "react-native";
import { Styles } from "./Styles";

export default function App() {
  const [address, setAddress] = useState("");
  const [coordinate, setCoordinate] = useState({
    latitude: 60.201373,
    longitude: 24.934041,
  });
  const [title, setTitle] = useState("Haaga-Helia");

  const getCoordinates = () => {
    fetch(
      `https://www.mapquestapi.com/geocoding/v1/address?key=AMvRCrOdPt5xGYsD1zg5aWBpUCBeN8v8&location=${address}`
    )
      .then((res) => res.json())
      .then((data) => {
        let loc = data.results[0].locations[0].latLng;
        console.log(loc.lat, loc.lng);
        setCoordinate({
          latitude: loc.lat,
          longitude: loc.lng,
        });
        setTitle(address);
        setRegion({ ...region, latitude: loc.lat, longitude: loc.lng });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const [region, setRegion] = useState({
    latitude: 60.201373,
    longitude: 24.934041,
    latitudeDelta: 0.0322,
    longitudeDelta: 0.0221,
  });

  return (
    <View style={Styles.container}>
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Enter a valid address"
        style={Styles.input}
      />
      <Button title="Show" onPress={getCoordinates} />
      <MapView style={Styles.map} region={region}>
        <Marker coordinate={coordinate} title={title} />
      </MapView>
    </View>
  );
}
