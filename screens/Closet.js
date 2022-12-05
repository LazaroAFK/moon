import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";

import { Card, HomeHeader, MenuBar, FocusedStatusBar, CircleButton } from "../components";
import { COLORS, MEDRESSData, SIZES, FONTS, assets } from "../constants";

import { useNavigation } from "@react-navigation/native";

import DataBase from "../services/SQLite";

const Home = ({ data }) => {
  const navigation = useNavigation();
  const [nftData, setNftData] = useState(MEDRESSData);

  const [dressData, setDressData] = useState({});
  
  useEffect(() =>{
    if(data == null){
      new DataBase().then(db => {
        db.transaction(
          (t) => t.executeSql(
            `SELECT * FROM dress;`,
            [],
            (_, { rows: { _array } }) => {
              console.log(_array)
              setDressData(_array.map(e => JSON.parse(e.data)));
            }),
            e => console.log(e)
          );
      })
      return () => {};
    }else{
      setDressData(data.map(e => JSON.parse(e.data)));
    }
    
  }, [data]);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(MEDRESSData);
    }

    const filteredData = MEDRESSData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(MEDRESSData);
    } else {
      setNftData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0, marginBottom: 50 }}>
          <FlatList
            data={dressData}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<>
            <View style={{ marginVertical: SIZES.font, padding: 10 }}>
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.extraLarge,
                color: COLORS.white,
              }}
            >
              Tú armario
            </Text>
            <CircleButton
      imgUrl={assets.add}
      right={15}
      top={10}
      handlePress={() => navigation.navigate("New")}
    />
          </View>
            </>}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{ height: 75, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0
          }}>
          <MenuBar />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
