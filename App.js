import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import Recipe from "./Recipe";
import { Styles } from "./Styles";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=pork")
      .then((res) => res.json())
      .then((data) =>
        setRecipes(
          data.meals.map((meal) => {
            return {
              id: meal.idMeal,
              name: meal.strMeal,
              image: meal.strMealThumb,
            };
          })
        )
      );
  }, []);

  if (recipes.length === 0) {
    return (
      <View style={Styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    console.log(recipes);
    return (
      <View style={Styles.container}>
        <Text style={Styles.title}>Random Pork Recipes</Text>
        <FlatList
          data={recipes}
          renderItem={({ item }) => <Recipe recipe={item} />}
        ></FlatList>
      </View>
    );
  }
}
