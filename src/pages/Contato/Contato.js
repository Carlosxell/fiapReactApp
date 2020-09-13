import React from 'react';
import { StyleSheet, Text, ScrollView, TextInput } from 'react-native';
import Main from '../../Layout/Main';

export default function ContatoPage({ navigation }) {
  return (
    <Main navigation={navigation} content={
      <ScrollView>
        <TextInput style={{ width: 33.33, ...styles.input }} placeholder='Teste' />
        <Text>Página de contato</Text>
      </ScrollView>
    } />
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    borderRadius: 6,
    borderWidth: 2,
  },
});
