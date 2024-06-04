/* eslint-disable react-native/no-color-literals */
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Checkbox, TextInput } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

import { Routes } from "~/navigation/Routes";

export default function LoginScreen({ navigation }) {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const navigateToTerms = () => {
    navigation.navigate(Routes.TERMS_SCREEN);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TextInput
        label="Email"
        style={styles.input}
      />

      <TextInput
        label="Password"
        style={styles.input}
        secureTextEntry={isPasswordShow}
      />

      <Checkbox.Item
        status="unchecked"
        label="Show Password"
        onPress={() => setIsPasswordShow(!isPasswordShow)}
      />

      <Button onPress={() => console.log("Pressed")}>Login</Button>

      <TouchableOpacity onPress={navigateToTerms}>
        <Text>Read Terms and conditions</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
  },
  input: {
    width: 300,
  },
});
