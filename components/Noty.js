import React, {useEffect, useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { SubInfo, EthPrice, DRESSTitle } from "./SubInfo";
import { RectButton, CircleButton } from "./Button";

import DataBase from "../services/SQLite";

const DRESSCard = ({ data }) => {
  const navigation = useNavigation();
  const [userAwait, setUserAwait] = useState(false);

  useEffect(() =>{
    new DataBase().then(db => {
      db.transaction(
        (t) => t.executeSql(
          `DELETE FROM noty WHERE id = 1;`,
          [],
          (_, { rows: { _array } }) => console.log(_array),
          e => console.log(e))
        );
    })
    return () => {};
  }, [userAwait]);

  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
        padding: SIZES.large
      }}
    >
      <View
        style={{
          width: "100%",
          height: 40,
        }}
      >
        <Image
          source={assets[data.image] ?? data.image}
          resizeMode="cover"
          style={{
            width: 40,
            height: 40,
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.add} right={10} top={10} handlePress={() => {
              setUserAwait(!userAwait)
            }}/>
      </View>
      <Text
        style={{fontSize: 20}}
      >
        {data.title}
      </Text>
      <Text>
        {data.description}
      </Text>
    </View>
  );
};

export default DRESSCard;
