import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import Result from "./Result";
import { Styles } from "./Styles";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [keyword, setKeyword] = useState("");

  const getRecipes = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
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
      )
      .catch((err) => {
        console.log(err);
        alert("Some errors with your keyword!");
      });
  };

  const getKeyword = (e) => setKeyword(e.target.value);

  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.input}
        placeholder="Enter a food keyword"
        value={keyword}
        onChangeText={(keyword) => setKeyword(keyword)}
      />
      <Button title="Find" onPress={getRecipes}></Button>
      <Result recipes={recipes} />
    </View>
  );
}
