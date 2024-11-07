import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Dashboard from "./components/Dashboard/Dashboard";
import styles from "./App.styles";
import { ImageBackground } from "react-native";
import imageHot from "./assets/images/hot.png";
import imageCold from "./assets/images/cold.png";
import { useState } from "react";

export default function App() {
  const [currentBackground, setCurrentBackground] = useState(imageCold);
  const isColdTemp = (cold) => {
    if (cold) {
      setCurrentBackground(imageCold);
    } else {
      setCurrentBackground(imageHot);
    }
  };
  return (
    <ImageBackground source={currentBackground} style={styles.backgroundImage}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.mainWrapper}>
          <Dashboard isCold={isColdTemp} />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
