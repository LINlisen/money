import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./src/screens/HomeSrceen";
import MainTabNavigator from "./src/navigaions/MainTabNavigation";
import Topbar from "./src/navigaions/Topbar";
const App=() => {
  return (
    <MainTabNavigator />
    
  );
}
export default App;
