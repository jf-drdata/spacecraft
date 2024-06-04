/* eslint-disable react/prop-types */
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";


type Props = {
  route: {
    params: {
      item: {
        name: string;
        manufacturer: string;
      };
    };
  };
};

const StarshipDetailScreen = ({ route, navigation: { goBack } }: Props) => {
  const {
    item: { name, manufacturer },
  } = route.params;

  const handleBack = () => {
    goBack();
  };

  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Card.Title title={name} />

        <Card.Content>
          <Text>{manufacturer}</Text>
        </Card.Content>

        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />

        <Card.Actions>
          <Button onPress={handleBack}>Cancel</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default StarshipDetailScreen;

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
  },
  container: {
    marginTop: 36,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
});
