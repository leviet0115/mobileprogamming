import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: "10%",
  },

  map: {
    width: "100%",
    height: "50%",
  },

  title: {
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginTop: 20,
  },

  result: {
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 5,
    marginTop: 5,
    textAlign: "center",
  },

  input: {
    width: "80%",
    height: 40,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
  },

  picker: {
    width: 100,
    height: 40,
    borderWidth: 1,
  },

  inputBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 5,
    width: 210,
  },
});
