import { useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button, Card } from "react-native-paper";

import { useStarships } from "../hooks/useStarShips";
import { Routes } from "~/navigation/Routes";

type ItemProps = {
  item: {
    name: string;
  };
  onPress: () => void;
};

const Item = ({ item, onPress }: ItemProps) => {
  return (
    <Card style={styles.cardContainer}>
      <Card.Title title={item.name} />

      <Card.Content>
        <Text>{item.name}</Text>
      </Card.Content>

      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />

      <Card.Actions>
        <Button>Cancel</Button>
        <Button onPress={onPress}>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

export const StarshipFeedScreen = ({ navigation: { navigate }}) => {
  const { isPending, data } = useStarships();

  const handlePress = (item) => {
    navigate(Routes.STARSHIP_DETAIL_SCREEN, { item })
  }

  if (isPending)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <FlatList
          data={data.results}
          renderItem={({ item }) => (
            <Item
              item={item}
              onPress={() => handlePress(item)}
            />
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
  },
  headerContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
