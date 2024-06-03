// App.tsx
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import LoginScreen from './src/screens/LoginScreen';
import Header from './src/components/Header';
import { TermsScreen } from "./src/screens/TermsScreen";

function App() {
  return (
    <PaperProvider>
      <Header title="SpaceCraft" />

      {/* <LoginScreen /> */}
      <TermsScreen />
    </PaperProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;