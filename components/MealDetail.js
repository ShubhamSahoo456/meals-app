import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealDetail = ({ detail, style }) => {
  return (
    <>
      <View style={styles.details}>
        <Text style={[styles.detailstitle, style]}>{detail.duration}m</Text>
        <Text style={[styles.detailstitle, style]}>{detail.affordability}</Text>
        <Text style={[styles.detailstitle, style]}>{detail.complexity}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailstitle: {
    marginHorizontal: 20,
    padding: 10,
    fontSize: 16,
  },
});

export default MealDetail;
