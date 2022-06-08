import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Countries from "./components/Countries";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 50, fontSize: 40, fontWeight: 700 }}>
        Visiting Countries!
      </Text>
      <Countries></Countries>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCD6F6",
    alignItems: "center",
    justifyContent: "center",
  },
});
