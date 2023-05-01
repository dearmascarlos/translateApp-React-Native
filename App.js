/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * TRABAJANDO EN MASTER
 *
 * @format
 */

import React, { useState } from 'react';
import tw from 'twrnc';
import {
  Alert,
  Pressable,
  SafeAreaView, // Solo sirve para IOS
  Text,
  View,
} from 'react-native';

import {useDeviceContext} from 'twrnc';

import LanguageSelector from './components/LanguageSelector';

const App = () => {
  useDeviceContext(tw); // para usar nuestro 'dark mode'

  const [language, setLanguage] = useState('es')

  const profileToast = () => {
    Alert.alert('Usuario', 'Carlos de Armas', [
      {text: 'Cancelar', style: 'cancel'},
      {text: 'Ok', onPress: () => console.log('Vale')},
    ]);
  };

  return (
    <SafeAreaView style={tw`flex flex-1`}>
      {/* cabecera de la app */}
      <View style={tw`flex flex-row justify-between px-6 py-4`}>
        <Text style={tw`flex text-2xl font-bold`}>Translate App</Text>
        <Pressable
          onPress={profileToast}
          style={tw`rounded-full w-12 h-12 bg-slate-200 flex items-center justify-center`}>
          <Text style={tw`text-slate-800 font-bold`}>CA</Text>
        </Pressable>
      </View>
      <LanguageSelector language={language} setLanguage={setLanguage}/>
    </SafeAreaView>
  );
}

export default App;
