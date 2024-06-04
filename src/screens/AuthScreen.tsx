/* eslint-disable react-native/no-color-literals */
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

import AuthContext from "~/context/AuthContext";

type Props = {};

const AuthScreen = (props: Props) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 250, height: 250, marginVertical: 32 }}
        source={{
          uri: "https://media.giphy.com/media/krkrHAEodHgzP72rTI/giphy.gif",
        }}
      />

      <Text>AuthScreen</Text>

      <Button onPress={() => signIn()}>blop</Button>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
  },
});
