import React, { useState } from "react";
import Home from "./screens/home";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

// These fonts can be used anywhere, in any components inside the app after being loaded
const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Home />
    );
  } else {
    // AppLoading provides a callback to be executed when some task is completed
    return (
      <AppLoading      
        startAsync={getFonts} // The asynchronous task to be completed
        onFinish={() => setFontsLoaded(true)} // Callback to execute when task is done
        onError={console.warn} // Must provide onError when startAsync is used
      />
    );
  }
}
