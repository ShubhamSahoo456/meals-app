import React, { useState, useLayoutEffect, useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import MealDetail from "../components/MealDetail";
import IconButton from "../components/IconButton";
import { FavouriteContext } from "../store/context/favouriteContext";

const MealDetailScreen = ({ navigation }) => {
  const route = useRoute();
  const [menuItem, setMenuItem] = useState(route.params.item);
  const favouriteContext = useContext(FavouriteContext);
  const isFavourite = favouriteContext.ids.includes(menuItem.id);

  const favouriteHandler = () => {
    if (isFavourite) {
      favouriteContext.removeFavourite(menuItem.id);
    } else {
      favouriteContext.addFavourite(menuItem.id);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isFavourite ? "star" : "star-outline"}
            color="white"
            onPress={favouriteHandler}
          />
        );
      },
    });
  }, [favouriteHandler, navigation]);
  return (
    <>
      <ScrollView style={styles.container}>
        <View>
          <Image source={{ uri: menuItem.imageUrl }} style={styles.imageurl} />
          <Text style={styles.title}>{menuItem.title}</Text>
          <MealDetail detail={menuItem} style={styles.details} />
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>
          <View style={styles.detailsContainer}>
            {menuItem.ingredients.map((ingregient) => (
              <View key={ingregient} style={styles.itemsMaking}>
                <Text style={styles.itemStep}>{ingregient}</Text>
              </View>
            ))}
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>
          <View style={styles.detailsContainer}>
            {menuItem.steps.map((step) => (
              <View key={step} style={styles.itemsMaking}>
                <Text style={styles.itemStep}>{step}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
  },
  imageurl: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 15,
    color: "#ffffff",
    letterSpacing: 1.3,
  },
  details: {
    color: "#ffffff",
  },
  subtitleContainer: {
    marginHorizontal: 35,
    marginVertical: 8,
    borderBottomWidth: 2,
    borderColor: "#e2b497",
    padding: 6,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  detailsContainer: {
    alignItems: "center",
  },
  itemsMaking: {
    width: "80%",
    backgroundColor: "#e3b497",
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 5,
  },
  itemStep: {
    fontSize: 18,
  },
});

export default MealDetailScreen;
