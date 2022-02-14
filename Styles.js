import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },

  title: {
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
  },

  recipe: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },

  caption: {
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 5,
    textAlign: "center",
  },

  input: {
    width: 300,
    height: 40,
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 5,
  },
});
