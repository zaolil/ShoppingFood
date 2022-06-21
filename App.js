import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

import { SafeAreaView } from "react-native";
import { SplashScreen, Welcome , LogginOption} from "./src/Screens";

export default function App() {
  return (
      <LogginOption />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
