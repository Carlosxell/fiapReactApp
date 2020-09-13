import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={ () => navigation.navigate('Home') }>
        <Text style={styles.btnLink}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => navigation.navigate('Sobre') }>
        <Text style={styles.btnLink}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => navigation.navigate('Contato') }>
        <Text style={styles.btnLink}>Contato</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: '#efefef',
    flexDirection: 'row',
    paddingBottom: 12,
    paddingRight: 8,
    paddingTop: 12,
    justifyContent: 'flex-end',
  },
  btnLink: {
    backgroundColor: '#599dca',
    borderRadius: 6,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 6,
    textAlign: 'center',
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 6,
    width: 84,
  },
});
