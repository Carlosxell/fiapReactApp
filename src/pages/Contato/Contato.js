import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from '../../Layout/Main';

export default function ContatoPage({ navigation }) {
  return (
    <Main navigation={navigation} content={
      <Text>Página de contato</Text>
    } />
  );
}
