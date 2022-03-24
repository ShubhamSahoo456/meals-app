import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetail from "./MealDetail";

const MealGridItem = ({ item }) => {
  const navigation = useNavigation();

  const mealDetailsHandler = () => {
    navigation.navigate("MealDetail", { item });
  };

  return (
    <>
      <View style={styles.outerContainer}>
        <TouchableOpacity
          onPress={mealDetailsHandler}
          activeOpacity={0.8}
          style={styles.container}
        >
          <View>
            <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <MealDetail detail={item} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  itemImage: {
    width: "100%",
    height: 200,
  },
  outerContainer: {
    borderRadius: 10,
    overflow: "hidden",
    borderRadius: 10,
  },
  container: {
    margin: 15,
    shadowColor: "black",
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 4,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
    padding: 10,
  },
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

export default MealGridItem;
