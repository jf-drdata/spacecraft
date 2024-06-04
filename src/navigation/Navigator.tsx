import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "./Routes";

import LoginScreen from "~/screens/LoginScreen";
import { TermsScreen } from "~/screens/TermsScreen";
import { StarshipFeedScreen } from "~/screens/StarshipFeedScreen";
import  StarshipDetailScreen  from "~/screens/StarshipDetailScreen";
import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';
type RootStackParamList = {
  Login: undefined;
  Terms: undefined;
  Starships: undefined;
  Starship: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {

  const navigationRef = useNavigationContainerRef();

  useReactNavigationDevTools(navigationRef);

  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen
          name={Routes.LOGIN_SCREEN}
          component={LoginScreen}
        />

        <Stack.Screen
          name={Routes.TERMS_SCREEN}
          component={TermsScreen}
        /> */}

        <Stack.Screen
          name={Routes.STARSHIP_FEED_SCREEN}
          component={StarshipFeedScreen}
        />

        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name={Routes.STARSHIP_DETAIL_SCREEN}
            component={StarshipDetailScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
  );
};

export default Navigator;
