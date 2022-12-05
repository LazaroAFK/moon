import React, {useState} from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList, TextInput } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
import * as MailComposer from 'expo-mail-composer';

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
  const [userInput, setUserInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleUserInput = (value) => {
    setUserInput(value);
  };

  const handlePasswordInput = (value) => {
    setPasswordInput(value);
  };


  const enviado = () => {
    options = {
      subject: userInput,
      recipients: ["contacto@correo.com"],
      body: passwordInput,}
    MailComposer.composeAsync(options)
      .then((result) => {
        resolve(result)
      })
      .catch((error) => {
        reject(error)
      })
    setUserInput('');
    setPasswordInput('');
    navigation.goBack();
  }

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
                  Soporte
                </Text>

          <Text style={{color:  COLORS.primary, fontSize: FONTS.large}}>Asunto</Text>
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
              placeholder="Describe el asunto..."
              style={{ flex: 1, color: COLORS.primary, fontSize: FONTS.large }}
              onChangeText={handleUserInput}
              value={userInput}
            />
          </View>

          <Text style={{color:  COLORS.primary, fontSize: FONTS.large}}>Detalle</Text>
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
              placeholder="Detalla tu solicitud..."
              style={{ flex: 1, color: COLORS.primary, fontFamily: FONTS.large }}
              onChangeText={handlePasswordInput}
              value={passwordInput}
            />
          </View>
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
        <RectButton handlePress={() => enviado()} minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} text="Enviar" />
      </View>
    </SafeAreaView>
  );
};

export default Details;
