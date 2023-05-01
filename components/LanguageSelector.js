import React, {Component, useEffect, useState} from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import tw from 'twrnc';
import LANGUAGES from '../libs/languages';

const LanguageSelector = ({language, setLanguage}) => {
  const [selectedLanguage, setSelectedLanguage] = useState()
  useEffect(() => {
    const selectedLanguageIndex = LANGUAGES.findIndex(
      item => item.value === language,
    );
    setSelectedLanguage(selectedLanguageIndex);
  }, [language]);

  return (
    <View>
      <View style={tw`flex flex-row items-center`}>
        <Text style={tw`text-lg pl-6 pr-2`}> Selected language:</Text>
        <View style={tw`bg-slate-200 px-2 py-2 rounded-lg`}>
          <Text style={tw`font-bold`}>{LANGUAGES[selectedLanguage]?.label}</Text>
        </View>
      </View>
      <View style={tw`flex flex-row flex-wrap mt-4 gap-3`}>
        <FlatList
          data={LANGUAGES}
          keyExtractor={item => item.label}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={tw`w-2`}></View>}
          contentContainerStyle={tw`p-8`}
          renderItem={({item}) => (
            <Pressable
              onPress={() => setLanguage(item.value)}
              style={tw`${
                language === item.value
                  ? ' bg-sky-200 border-sky-300'
                  : 'bg-slate-200 border-slate-200'
              } p-2 rounded-xl w-40 h-20 justify-center items-center shadow-lg`}>
              <Text style={tw`text-sky-800 font-medium`}>{item.label}</Text>
            </Pressable>
          )}
        />
        {/* {LANGUAGES.map(l => {
          return (
            <Pressable
              key={l.label}
              style={tw`${language === l.value ? ' bg-sky-100 border-sky-300' : 'bg-slate-100 border-slate-200'} p-2 rounded-xl`}>
              <Text style={tw`text-sky-800 font-medium`}>{l.label}</Text>
            </Pressable>
          );
        })} */}
      </View>
    </View>
  );
};

export default LanguageSelector;
