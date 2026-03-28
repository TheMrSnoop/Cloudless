import { Text, View, StyleSheet} from "react-native";


export default function Index() {
  return (
    <View style={indexStyle.container}>
      <Text style={indexStyle.text}>What is goooood?</Text>
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
    padding: 25,
    fontFamily: "DMMono_400Regular"
  },
  button:
  {
    fontSize: 24,
    textDecorationLine: "underline",
    color: "#ffffff"
  }
})
