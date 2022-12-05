import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

import { useNavigation } from "@react-navigation/native";

const HomeHeader = () => {
  const navigation = useNavigation();
  const size = 28;
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={assets.home}
            resizeMode="contain"
            style={{ width: size, height: size }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Closet")}>
          <Image
            source={assets.shirt}
            resizeMode="contain"
            style={{ width: size, height: size }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <Image
            source={assets.notification}
            resizeMode="contain"
            style={{ width: size, height: size }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
          <Image
            source={assets.contact}
            resizeMode="contain"
            style={{ width: size, height: size }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
