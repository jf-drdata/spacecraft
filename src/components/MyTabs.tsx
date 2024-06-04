import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StarshipFeedScreen } from "~/screens/StarshipFeedScreen";
import { TermsScreen } from "~/screens/TermsScreen";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={StarshipFeedScreen}
      />
      <Tab.Screen
        name="Settings"
        component={TermsScreen}
      />
    </Tab.Navigator>
  );
}
