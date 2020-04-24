import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Head from "./src/compenents/Head";
export default function App() {
  return (
    <Head/>
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
