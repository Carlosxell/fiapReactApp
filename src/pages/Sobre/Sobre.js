import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from '../../Layout/Main';

export default function SobrePage({ navigation }) {
  return (
    <Main navigation={navigation} content={
      <Text>Página Sobre</Text>
    } />
  );
}
