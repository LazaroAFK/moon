import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { Card, HomeHeader, MenuBar, FocusedStatusBar } from "../components";
import { COLORS, DRESSData } from "../constants";

import DataBase from "../services/SQLite";

const Home = () => {
  const [nftData, setNftData] = useState(DRESSData);
  const [dressData, setDressData] = useState({});
  
  useEffect(() =>{
    new DataBase().then(db => {
      db.transaction(
        (t) => t.executeSql(
          `SELECT * FROM dress;`,
          [],
          (_, { rows: { _array } }) => {
            console.log(_array[0])
            setDressData(_array.map(e => JSON.parse(e.data)));
          }),
          e => console.log(e)
        );
    })
    return () => {};
  }, []);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(DRESSData);
    }

    const filteredData = DRESSData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(DRESSData);
    } else {
      setNftData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0, marginBottom: 50}}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
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
            style={{ height: 300, backgroundColor: COLORS.primary }} />
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
