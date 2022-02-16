import { Image, Text, View } from "react-native";
import { Styles } from "./Styles";

const Euro = ({ euro }) => {
  console.log(euro);
  if (Number(euro) !== 0) {
    return (
      <View>
        <Image source={require("./money-bag.png")} style={Styles.image}></Image>
        <Text style={Styles.result}>{euro} &#8364;</Text>
      </View>
    );
  }
  return <View></View>;
};

export default Euro;
