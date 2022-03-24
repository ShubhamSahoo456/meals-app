import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FilterScreern = (props) => {
  return (
    <>
      <View style={styles.container}>
        <Text>this is Filter screen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FilterScreern;
