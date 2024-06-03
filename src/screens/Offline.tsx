import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Offline = () => {
  // Add `useIsConnected()` hook

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        I'm offline
        {/* Check `isConnected` status and render a message with `ActivityIndicator` */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FEE2E2",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    padding: 20,
    position: "absolute",
    top: 55,
    width: "90%",
  },
  message: {
    color: "#991B1B",
  },
});
