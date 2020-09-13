import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './pages/Home/Home';
import ContatoPage from './pages/Contato/Contato';
import SobrePage from './pages/Sobre/Sobre';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Sobre" component={SobrePage} />
        <Stack.Screen name="Contato" component={ContatoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
