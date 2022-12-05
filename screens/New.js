import React, {useState, useEffect} from "react";
import { View, Button, Text, SafeAreaView, Image, StatusBar, FlatList, TextInput, TouchableOpacity } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";

import * as ImagePicker from 'expo-image-picker';

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

  const [image, setImage] = useState(null);

  const [userInput, setUserInput] = useState("");
  const [userColor, setColor] = useState("");
  const [temporada, setTemp] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [result, setResult] = useState(null);

  const [userAwait, setUserAwait] = useState(false);

  const handleColor = (value) => {
    setColor(value);
  };

  const handleTemp = (value) => {
    setTemp(value);
  };

  const handleUserInput = (value) => {
    setUserInput(value);
  };

  const handlePasswordInput = (value) => {
    setPasswordInput(value);
  };

  useEffect(() =>{
    if(image == null) return;
    new DataBase().then(db => {
      let query = `{"id": "DRESS-10","temp": "${temporada}","name": "${userInput}","creator": "Ruby","price": "${userColor}","description":"${passwordInput}","image": "${image}","bids": []}`
        console.log(query)
       db.transaction(
        (t) => {
          t.executeSql(
          `insert into dress VALUES(10, ?)`,
          [query],
          (_, { rows: { _array } }) => console.log(_array),
          e => console.log(e));
          t.executeSql("select * from dress", [], (_, { rows: { _array } }) =>
          setResult(_array)
        );
    });

        setUserInput('');
        setPasswordInput('');

        setColor('');
        setTemp('');

        navigation.goBack({ result });
    })
    return () => {};
  }, [userAwait]);
  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View>
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
                  Agregar prenda
                </Text>

          <Text style={{color:  COLORS.primary, fontSize: FONTS.large}}>Nombre</Text>
          <View
            style={{
              width: "100%",
              borderRadius: SIZES.font,
              backgroundColor: COLORS.secondary,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: SIZES.font,
              paddingVertical: SIZES.small - 2,
            }}
          >
            <TextInput
              placeholder="Dale un nombre a tu prenda"
              style={{ flex: 1, color: COLORS.primary, fontSize: FONTS.large }}
              onChangeText={handleUserInput}
              value={userInput}
            />
          </View>

          <Text style={{color:  COLORS.primary, fontSize: FONTS.large}}>Color</Text>
          <View
            style={{
              width: "100%",
              borderRadius: SIZES.font,
              backgroundColor: COLORS.secondary,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: SIZES.font,
              paddingVertical: SIZES.small - 2,
            }}
          >
            <TextInput
              placeholder="Dale un nombre a tu prenda"
              style={{ flex: 1, color: COLORS.primary, fontSize: FONTS.large }}
              onChangeText={handleColor}
              value={userColor}
            />
          </View>

          <Text style={{color:  COLORS.primary, fontSize: FONTS.large}}>Temporada</Text>
          <View
            style={{
              width: "100%",
              borderRadius: SIZES.font,
              backgroundColor: COLORS.secondary,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: SIZES.font,
              paddingVertical: SIZES.small - 2,
            }}
          >
            <TextInput
              placeholder="Dale un nombre a tu prenda"
              style={{ flex: 1, color: COLORS.primary, fontSize: FONTS.large }}
              onChangeText={handleTemp}
              value={temporada}
            />
          </View>

          <Text style={{color:  COLORS.primary, fontSize: FONTS.large}}>Descripción</Text>
          <View
            style={{
              width: "100%",
              borderRadius: SIZES.font,
              backgroundColor: COLORS.secondary,
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              paddingHorizontal: SIZES.font,
              paddingVertical: SIZES.small - 2,
            }}
          >
            <TextInput
              multiline
              numberOfLines={8}
              placeholder="Describe la prenda..."
              style={{ flex: 1, color: COLORS.primary, fontFamily: FONTS.large }}
              onChangeText={handlePasswordInput}
              value={passwordInput}
            />
          </View>
          <View
                  style={{
                      width: "30%",
                      top: 8,
                      justifyContent: "center",
                      borderRadius: 10,
                    }}
                  >
                    <TouchableOpacity
                      onPress={pickImage}
                    >
                      <Image
                        // source={images.upload}
                      />
                    <Text> {'Subir imágenes'}</Text>
                    </TouchableOpacity>
                  </View>
                  {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
      </View>
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
        <RectButton handlePress={() => {
              setUserAwait(!userAwait)
            }}  minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} text="Agregar" />
      </View>
    </SafeAreaView>
  );
};

export default Details;
