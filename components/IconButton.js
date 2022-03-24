import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, color, onPress }) => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Ionicons name={icon} size={24} color={color} />
      </TouchableOpacity>
    </>
  );
};

export default IconButton;
