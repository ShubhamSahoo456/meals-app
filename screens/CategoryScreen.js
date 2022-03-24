import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridItem from "../components/CategoryGridItem";

const CategoryScreen = ({ navigation }) => {
  const navigationHandler = (item) => {
    navigation.navigate("MealOverview", { item: item });
  };

  const categoryItem = (itemData) => {
    return (
      <CategoryGridItem
        onPress={navigationHandler.bind(this, itemData.item)}
        item={itemData.item}
      />
    );
  };

  return (
    <>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        numColumns={2}
        renderItem={categoryItem}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default CategoryScreen;
