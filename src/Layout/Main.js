import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function HomePage({ content, navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, paddingVertical: 36 }}>
        <Header navigation={navigation} />
        <View style={{ padding: 20, paddingTop: 48 }}>
          { content }
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    height: 100,
    paddingVertical: 20,
  },
});
