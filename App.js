import react, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "./screens/CategoryScreen";
import CategoryMealScreen from "./screens/CategoryMealScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import DrawerNavigation from "./navigation/Drawernavigation";

const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Medium.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-BoldItalic.ttf"),
  });
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "#ffffff",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="AllCategories"
            options={{ headerShown: false }}
            component={DrawerNavigation}
          />
          <Stack.Screen
            name="MealOverview"
            options={({ navigation, route }) => {
              return { headerTitle: route.params.item.title };
            }}
            component={CategoryMealScreen}
          />
          <Stack.Screen
            name="MealDetail"
            options={({ navigation, route }) => {
              return { headerTitle: route.params.item.title };
            }}
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
