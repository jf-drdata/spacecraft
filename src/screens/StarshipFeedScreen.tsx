import React from "react";
import { StatusBar, StyleSheet, FlatList, View, Text, Image, ScrollView } from "react-native";

import { Card, Button } from 'react-native-paper';

import { default as data } from "../../api/data.json";

type ItemProps = {
  item: {
    name: string;
    manufacturer: string;
  };
};

const Item = ({ item }: ItemProps) => {

  return (
    <Card style={styles.cardContainer}>
      <Card.Title title={item.name} />

      <Card.Content>
        <Text>{item.name}</Text>
        <Text>{item.manufacturer}</Text>
      </Card.Content>

      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  )
};


export const StarshipFeedScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <FlatList
          data={data.results}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.created}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
  },
  headerContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  cardContainer: {
    marginBottom: 20
  }
});
