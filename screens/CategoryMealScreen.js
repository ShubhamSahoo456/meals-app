import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealGridItem from "../components/MealGridItem";

const CategoryMealScreen = ({ navigation, route }) => {
  const [itemDetails, setitemDetails] = useState(route.params.item);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const data = MEALS.filter((mealItem) => {
      return mealItem.categoryIds.indexOf(itemDetails.id) >= 0;
    });
    setMeals(data);
  }, [itemDetails.id]);

  const mealGridItemhandler = (itemData) => {
    return <MealGridItem item={itemData.item} />;
  };

  return (
    <>
      <FlatList
        numColumns={1}
        data={meals}
        keyExtractor={(item, index) => item.id}
        renderItem={mealGridItemhandler}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});

export default CategoryMealScreen;
