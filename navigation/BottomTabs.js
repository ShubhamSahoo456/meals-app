import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigation from "./Drawernavigation";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <>
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
    </>
  );
};

export default StackNavigation;
