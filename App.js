import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text,TouchableWithoutFeedback,StatusBar as Bar, View, Image, SafeAreaView } from "react-native";

export default function App() {
  console.log(require("./assets/splash.png"));
  const handlePress = () => console.log("Text pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        React Native
      </Text>
      <TouchableWithoutFeedback>
      <Image 
      blurRadius={0.4}
      source={{
        width:200,
        height: 300,
        uri: 'https://picsum.photos/200/300'}} />
      </TouchableWithoutFeedback>
      
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
