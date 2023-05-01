import React, {Component} from 'react';
import {View, Text, Pressable} from 'react-native';
import tw from 'twrnc';
import LANGUAGES from '../libs/languages';

const LanguageSelector = ( { language } ) => {
  return (
    <View style={tw`px-8`}>
      <Text style={tw`text-lg`}> Select your language </Text>
      <View style={tw`flex flex-row flex-wrap mt-4 gap-3`}>
        {LANGUAGES.map(l => {
          return (
            <Pressable
              key={l.label}
              style={tw`${language === l.value ? ' bg-sky-100 border-sky-300' : 'bg-slate-100 border-slate-200'} p-2 rounded-xl`}>
              <Text style={tw`text-sky-800 font-medium`}>{l.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default LanguageSelector;
