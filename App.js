import react, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import FavouriteContextProvider from "./store/context/favouriteContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavouriteScreen from "./screens/FavouriteScreen";
import StackNavigation from "./navigation/BottomTabs";
import { Ionicons } from "@expo/vector-icons";

const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Medium.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-BoldItalic.ttf"),
  });
};

const BottonTabs = createBottomTabNavigator();

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
      <FavouriteContextProvider>
        <NavigationContainer>
          <BottonTabs.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "#ffffff",
              tabBarActiveTintColor: "#3f2f25",
              headerLeft: () => {
                return (
                  <Ionicons
                    name="list"
                    size={24}
                    color="white"
                    style={{ marginLeft: 20 }}
                    onPress={() => {}}
                  />
                );
              },
            }}
          >
            <BottonTabs.Screen
              name="Category"
              component={StackNavigation}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="list" size={size} color={color} />
                ),
              }}
            />
            <BottonTabs.Screen
              name="favouritetab"
              component={FavouriteScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="star" size={size} color={color} />
                ),
              }}
            />
          </BottonTabs.Navigator>
        </NavigationContainer>
      </FavouriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
