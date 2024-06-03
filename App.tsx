// App.tsx
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import Header from './src/components/Header';

import LoginScreen from './src/screens/LoginScreen';
// import { TermsScreen } from "./src/screens/TermsScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";

function App() {
  return (
    <PaperProvider>
      <Header title="SpaceCraft" />

      {/* <LoginScreen /> */}
      {/* <TermsScreen /> */}

      <StarshipFeedScreen />


    </PaperProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;