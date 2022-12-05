import React, {useEffect, useState} from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS, NotyData } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar, Noty } from "../components";

import DataBase from "../services/SQLite";

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
  const [dressData, setDressData] = useState({});

  useEffect(() =>{
    new DataBase().then(db => {
      db.transaction(
        (t) => t.executeSql(
          `SELECT * FROM noty;`,
          [],
          (_, { rows: { _array } }) => setDressData(_array.map(e => JSON.parse(e.data)))),
          e => console.log(e)
        );
    })
    return () => {};
  }, []);

  const limpiar = ()=>{
    setDressData([])
  }

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
        <RectButton handlePress={()=> limpiar()}  minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} text="Limpiar" />
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
                  Notificaciones
                </Text>
                <View style={{ zIndex: 0 }}>
          <FlatList
            data={dressData}
            renderItem={({ item }) => <Noty data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
        </View>
    </SafeAreaView>
  );
};

export default Details;
