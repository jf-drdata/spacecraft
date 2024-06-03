/* eslint-disable react-native/no-color-literals */
import { StyleSheet, Text } from "react-native";

export default function Header({ title }: { title: string }) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: "#7250E9",
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    padding: 100,
    textAlign: "center",
  },
});
