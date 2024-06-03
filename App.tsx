// App.tsx
import { NetworkProvider } from "react-native-offline";
import { Provider as PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import { TermsScreen } from "./src/screens/TermsScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";

import { ScreenContainer } from "~/screens/ScreenContainer";

const queryClient = new QueryClient();

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
}

export default App;
