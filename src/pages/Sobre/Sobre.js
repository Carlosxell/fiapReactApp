import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Main from '../../Layout/Main';

export default function SobrePage({ navigation }) {
  return (
    <Main navigation={navigation} content={
      <ScrollView>
        <Text style={styles.title}>Sobre</Text>

        <Text style={styles.paragraph}>O Software de monitoramento ambiental desenvolvido pela Matrix consiste em acompanhar em tempo real o histórico, temperatura, umidade e outras grandezas de produtos perecíveis e cargas vivas.</Text>
        <Text style={styles.paragraph}>O Sistema foi desenvolvido de modo que os usuários acessem de maneira simples e fácil os dados de armazenamento do produto que está adquirindo. Podendo inserir os dados manualmente.</Text>
        <Text style={styles.paragraph}>Podendo também ser utilizados por indústrias farmacêuticas que necessitam de acompanhamento de áreas de matérias primas de produção de medicamentos.</Text>
        <Text style={styles.paragraph}>A tecnologia utilizada é capaz de armazenar os dados em bancos de dados e disponibilizá-los atráves de aplicativo mobile e web tornando-se assim uma ferramenta poderosa.</Text>
      </ScrollView>
    } />
  );
}

const styles = StyleSheet.create({
  title: {
    borderBottomColor: '#111111',
    borderBottomWidth: 2,
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    marginBottom: 20,
    paddingBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 24,
    marginBottom: 24,
  },
});
