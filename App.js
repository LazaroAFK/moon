import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Home from "./screens/Home";
import Details from "./screens/Details";
import Closet from "./screens/Closet";
import Profile from "./screens/Profile";
import Contact from "./screens/Contact";
import Notifications from "./screens/Notifications";
import New from "./screens/New";

import { RectButton } from "./components/Button";
import { View, Text, Image, TextInput } from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS, assets } from "./constants";

import DataBase from "./services/SQLite";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(false);
  const [user, setUser] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [userAwait, setUserAwait] = useState(false);

  const handleUserInput = (value) => {
    setUserInput(value);
  };

  const handlePasswordInput = (value) => {
    setPasswordInput(value);
  };

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  
  useEffect(() =>{
    new DataBase().then(db => {
      db.transaction(
        (t) => t.executeSql(
          `SELECT * FROM user;`,
          [],
          (_, { rows: { _array } }) => {
            let data = JSON.parse(_array[0].data)
            if(data.user == userInput && data.pass == passwordInput){
              setUser(true);
            }
          }),
          e => console.log(e)
        );
    })
    return () => {};
  }, [userAwait]);

  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded || initializing) return null;

  if (!user) {
    return (
      <View>
        <View
          style={{
            padding: SIZES.extraLarge,
            paddingTop: "20%",
            backgroundColor: COLORS.primary,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={assets.logo}
              resizeMode="contain"
              style={{ width: 180, height: 50 }}
            />
          </View>

          <Text style={{color:  COLORS.white, fontFamily: FONTS.medium}}>Usuario</Text>
          <View
            style={{
              width: "100%",
              borderRadius: SIZES.font,
              backgroundColor: COLORS.gray,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: SIZES.font,
              paddingVertical: SIZES.small - 2,
            }}
          >
            <TextInput
              placeholder="Usuario"
              style={{ flex: 1, color: COLORS.shadow, fontFamily: FONTS.large }}
              onChangeText={handleUserInput}
              value={userInput}
            />
          </View>

          <Text style={{color:  COLORS.white, fontFamily: FONTS.large}}>Contraseña</Text>
          <View
            style={{
              width: "100%",
              borderRadius: SIZES.font,
              backgroundColor: COLORS.gray,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: SIZES.font,
              paddingVertical: SIZES.small - 2,
            }}
          >
            <TextInput
              placeholder="Contraseña"
              style={{ flex: 1, color: COLORS.shadow, fontFamily: FONTS.medium }}
              onChangeText={handlePasswordInput}
              value={passwordInput}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            padding: SIZES.small,
          }}
        >
          <RectButton
            text={"Ingresar"}
            minWidth={120}
            fontSize={SIZES.large}
            handlePress={() => {
              setUserAwait(!userAwait)
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationTypeForReplace: "pop"
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Closet" component={Closet} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="New" component={New} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
