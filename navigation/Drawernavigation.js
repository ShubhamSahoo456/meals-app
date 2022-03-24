import react from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoryScreen from "../screens/CategoryScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "#ffffff",
          sceneContainerStyle: { backgroundColor: "#3f2f25" },
          drawerActiveBackgroundColor: "#3f2f25",
          drawerActiveTintColor: "#ffffff",
        }}
      >
        <Drawer.Screen
          name="Categories"
          options={{
            headerTitle: "Meal Categories",
            drawerLabel: "All Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
          }}
          component={CategoryScreen}
        />
        <Drawer.Screen
          name="Favourites"
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" size={size} color={color} />
            ),
          }}
          component={FavouriteScreen}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigation;
