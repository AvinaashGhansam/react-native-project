import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
  View,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  const { landscape } = useDeviceOrientation();

  const handlePress = () => console.log("clicked...");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blueBox}></View>
      <Text onPress={handlePress}>Hello!!</Text>
      <TouchableOpacity onPress={() => console.log("image touched")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity>
      <Button
        title="click me"
        onPress={() =>
          Alert.alert("My Title", "This is an alert msg", [
            { text: "Yes", onPress: () => console.log("yes") },
            { text: "No", onPress: () => console.log("no") },
          ])
        }
        color="orange"
      />
      {/*<StatusBar style="auto" />*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.length : 0,
  },
  blueBox: {
    backgroundColor: "dodgerblue",
    width: "100%",
    height: "30%",
  },
});
