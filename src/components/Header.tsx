import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';

export default function Header({ title }: { title: string }) {
  return (
    <Card>
      <Text style={styles.title}>
        {title}
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    backgroundColor: '#7250E9',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 100,
    color: '#ffffff',
  },
});
