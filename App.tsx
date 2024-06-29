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
} from "react-native";

export default function App() {
  const handlePress = () => console.log("clicked...");
  return (
    <SafeAreaView style={styles.container}>
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
});
