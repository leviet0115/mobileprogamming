import { View, Text, FlatList } from "react-native";
import Recipe from "./Recipe";
import { Styles } from "./Styles";

const Result = ({ recipes }) => {
  if (recipes.length === 0) {
    return (
      <View style={Styles.container}>
        <Text>No data yet</Text>
      </View>
    );
  } else {
    console.log(recipes);
    return (
      <View>
        <Text style={Styles.title}>Are you looking for these?</Text>
        <FlatList
          data={recipes}
          renderItem={({ item }) => <Recipe recipe={item} />}
        ></FlatList>
      </View>
    );
  }
};

export default Result;
