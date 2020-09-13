import React, { useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Main from '../../Layout/Main';

export default function HomePage({ navigation }) {
  const store = AsyncStorage;

  async function teste() {
    await store.setItem('user', JSON.stringify({ user: 'Carlos Augusto' }));

    console.info(store.getItem('user'));
  }

  async function testeSegundo() {
    const request = await store.getItem('user');
    console.info(JSON.parse(request));
  }

  useEffect(() => { testeSegundo(); }, []);

  return (
    <Main navigation={navigation} content={
      <ScrollView>
        <Text>Home Page</Text>
      </ScrollView>
    } />
  );
}
