import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button, Checkbox } from 'react-native-paper';

export default function LoginScreen() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TextInput label="Email" style={styles.input} />

      <TextInput label="Password" style={styles.input} secureTextEntry={isPasswordShow} />

      <Checkbox.Item status="unchecked" label="Show Password" onPress={() => setIsPasswordShow(!isPasswordShow)} />

      <Button onPress={() => console.log('Pressed')}>
        Login
      </Button>

      <Text>Read Terms and conditions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    width: 300,
  }
});
