import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealGridItem from "./MealGridItem";

const MealItem = ({ meals }) => {
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

const styles = StyleSheet.create({});

export default MealItem;
