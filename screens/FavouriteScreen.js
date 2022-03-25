import React, { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FavouriteContext } from "../store/context/favouriteContext";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const FavouriteScreen = ({ navigation }) => {
  const favouriteContext = useContext(FavouriteContext);
  const meals = MEALS.filter((meal) => favouriteContext.ids.includes(meal.id));

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Favourites",
      sceneContainerStyle: { backgroundColor: "#3f2f25" },
    });
  }, [navigation]);

  if (favouriteContext.ids.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favourite items yet!</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.wrapper}>
        <MealItem meals={meals} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3f2f25",
  },
  text: {
    color: "#ffffff",
    fontSize: 24,
  },
  wrapper: {
    flexGrow: 1,
    backgroundColor: "#3f2f25",
  },
});

export default FavouriteScreen;
