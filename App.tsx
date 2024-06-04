// App.tsx
import React, { useMemo, useState } from "react";
import { NetworkProvider } from "react-native-offline";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Constants from "expo-constants";

// import { TermsScreen } from "./src/screens/TermsScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";


import { ScreenContainer } from "~/screens/ScreenContainer";

const queryClient = new QueryClient();

import AuthContext from "~/context/AuthContext";

import NavigationContainerApp from "~/navigation/NavigationContainerApp";

import AuthProvider from "~/context/AuthProvider";
import { MyTabs } from "~/components/MyTabs";

function App() {
  return (
    <AuthProvider>
      <NetworkProvider>
        <QueryClientProvider client={queryClient}>
          <PaperProvider>
            <NavigationContainerApp />

            {/* <ScreenContainer title="SpaceCraft"> */}
            {/* <LoginScreen /> */}
            {/* <TermsScreen /> */}

            {/* <StarshipFeedScreen /> */}
            {/* </ScreenContainer> */}
          </PaperProvider>
        </QueryClientProvider>
      </NetworkProvider>
    </AuthProvider>
  );
}

// export default App;

let AppEntryPoint = App;

if (Constants?.expoConfig?.extra?.storybookEnabled === "true") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  AppEntryPoint = require("./.storybook").default;
}

export default AppEntryPoint;
