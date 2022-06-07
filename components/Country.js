import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Country({ country }) {
  return (
    <View
      style={{
        margin: 10,
        borderWidth: 5,
        padding: 10,
        borderRadius: 20,
        borderColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>
        Country: {country.name.common}
      </Text>
      <Image
        style={styles.img}
        source={{
          uri: country.flags.png,
        }}
      ></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 200,
    padding: 10,
  },
});
