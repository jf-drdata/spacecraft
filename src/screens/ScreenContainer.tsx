import type { ReactNode } from "react";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useIsConnected } from 'react-native-offline';

import { Offline } from "./Offline";
import Header from "~/components/Header";

interface ScreenContainerProps {
  title: string;
  children?: ReactNode;
  withSeparatorFooter?: boolean;
  scrollable?: boolean;
}

export const ScreenContainer = ({
  title,
  children,
  withSeparatorFooter = false,
  scrollable = false,
}: ScreenContainerProps) => {
  const isConnected = useIsConnected();

  return (
    <ScrollView
      style={styles.container}
      nestedScrollEnabled={true}
    >
      {!isConnected ? (
        <Offline />
      ) : (
        <>
          <Header title="SpaceCraft" />

          {children}
        </>
      )}

      {withSeparatorFooter && <View style={styles.footer} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 36,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  footer: {
    paddingBottom: 256,
  },
  headerText: {
    fontWeight: "bold",
    marginBottom: 20,
  },
});
