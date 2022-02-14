import { Styles } from "./Styles";
import { View, Image, Text } from "react-native";

const Recipe = ({ recipe }) => {
  return (
    <View style={Styles.recipe}>
      <Text style={Styles.caption}>{recipe.name}</Text>
      <Image
        source={{
          uri: recipe.image,
        }}
        style={Styles.image}
      ></Image>
    </View>
  );
};

export default Recipe;
