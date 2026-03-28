import { Text, View, StyleSheet} from "react-native";

export default function AboutScreen() {
  return (
    <View style={indexStyle.container}>
      <Text style={indexStyle.text}>About or stuff.</Text>
    </View>
  );
}

const indexStyle = StyleSheet.create({ 
  container: {
    backgroundColor: "#101010",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: 
  {
    color: '#ffffff',
    fontSize: 64,
    padding: 25
  }
})
