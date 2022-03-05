import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Category } from "./src/screens/Category";
import { EventDetail } from "./src/screens/Category/EventDetail";
import { Home } from "./src/screens/Home";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() =>{
    setIsActive(true);
  }, [])

  if (!isActive) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Category"
            component={Category}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EventDetail"
            component={EventDetail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    );
  }
}
