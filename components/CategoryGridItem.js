import react from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CategoryGridItem = ({ item, onPress }) => {
  return (
    <>
      <TouchableOpacity
        style={{
          ...styles.itemList,
          ...{ backgroundColor: item.color },
        }}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <View>
          <Text style={styles.mealItem}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  itemList: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowOpacity: 0.25,
  },
  mealItem: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});

export default CategoryGridItem;
