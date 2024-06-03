// App.tsx
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NetworkProvider } from 'react-native-offline';
import Header from './src/components/Header';

// import { TermsScreen } from "./src/screens/TermsScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
import { ScreenContainer } from '~/screens/ScreenContainer';

const queryClient = new QueryClient()

function App() {


  return (
    <NetworkProvider>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>

          <ScreenContainer title="SpaceCraft">

            {/* <LoginScreen /> */}
            {/* <TermsScreen /> */}

            <StarshipFeedScreen />
          </ScreenContainer>


        </PaperProvider>
      </QueryClientProvider>
    </NetworkProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;