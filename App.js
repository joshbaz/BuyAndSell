import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  StatusBar as Bar,
  View,
  Image,
  SafeAreaView,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
export default function App() {
  //console.log(useDimensions())
  //console.log(useDeviceOrientation());

  const { landscape } = useDeviceOrientation();
  const handlePress = () => console.log("Text pressed");
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "50%",
        }}
      ></View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    paddingTop: Platform.OS === "android" ? Bar.currentHeight : 0,
  },
});
