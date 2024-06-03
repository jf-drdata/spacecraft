import { StyleSheet, Text } from 'react-native';

export default function Header({ title }: { title: string }) {
  return (
    <Text style={styles.title}>
      {title}
    </Text>
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
