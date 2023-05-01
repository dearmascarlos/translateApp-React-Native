/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * TRABAJANDO EN MASTER
 *
 * @format
 */

import React from 'react';
import tw from 'twrnc';
import {
  Alert,
  Pressable,
  SafeAreaView, // Solo sirve para IOS
  Text,
  View,
} from 'react-native';

import {useDeviceContext} from 'twrnc';

function App() {
  useDeviceContext(tw); // para usar nuestro 'dark mode'

  const profileToast = () => {
    Alert.alert('Usuario', 'Carlos de Armas', [
      {text: 'Cancelar', style: 'cancel'},
      {text: 'Ok', onPress: () => console.log('Vale')},
    ]);
  };

  return (
    <SafeAreaView style={tw`flex flex-1`}>
      <View style={tw`flex flex-row justify-between px-8 py-4`}>
        <Text style={tw`flex text-2xl font-bold`}>Translate App</Text>
        <Pressable
          onPress={profileToast}
          style={tw`rounded-full w-12 h-12 bg-slate-200 flex items-center justify-center`}>
          <Text style={tw`text-slate-800 font-bold`}>CA</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default App;
