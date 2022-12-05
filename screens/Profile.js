import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";

const DetailsHeader = ({ navigation }) => (
  <View style={{ width: "100%", height: 75 }}>

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
{/* 
    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    /> */}
  </View>
);

const Details = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} text="Respaldar" />
      </View>
      <DetailsHeader navigation={navigation} />
      <View
          style={{
            padding: SIZES.extraLarge,
          }}
        >

      <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.extraLarge,
                    color: COLORS.primary,
                  }}
                >
                  Perfil
                </Text>
        </View>
    </SafeAreaView>
  );
};

export default Details;
