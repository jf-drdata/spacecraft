import { useReactNavigationDevTools } from "@dev-plugins/react-navigation";
import {
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



import AuthScreen from "~/screens/AuthScreen";




type RootStackParamList = {
  Login: undefined;
  Terms: undefined;
  Starships: undefined;
  Starship: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = () => {
  const navigationRef = useNavigationContainerRef();

  useReactNavigationDevTools(navigationRef);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={"AUTH_STAC"}
        component={AuthScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
