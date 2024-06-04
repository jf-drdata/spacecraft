import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { MyTabs } from "~/components/MyTabs";
import AuthContext from "~/context/AuthContext";
import AuthNavigator from "~/navigation/AuthNavigator";
import Navigator from "~/navigation/Navigator";

const NavigationContainerApp = () => {
  const Stack = createNativeStackNavigator();
  const { user } = React.useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen
            name={"STARSHIPS_STACK"}
            component={Navigator}
          />
        ) : (
          <Stack.Screen
            name={"AUTH_STACK"}
            component={AuthNavigator}
          />
        )}
      </Stack.Navigator>

      {/* <MyTabs /> */}
    </NavigationContainer>
  );
};

export default NavigationContainerApp;
