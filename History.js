import { Styles } from "./Styles";
import { Text, View, FlatList } from "react-native";

const History = ({ route, navigation }) => {
  const { history } = route.params;
  return (
    <View style={Styles.historyDiv}>
      {history.length === 0 ? (
        <Text>No result. Do some calculation!</Text>
      ) : (
        <FlatList
          data={history}
          renderItem={({ item }) => (
            <Text style={Styles.listItem}>{item.record}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default History;
