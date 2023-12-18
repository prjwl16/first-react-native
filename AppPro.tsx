//write basic react functional component without comments
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import FlatCards from './components/FlatCards.tsx';
import ElevatedCards from './components/ElevatedCards.tsx';
import FancyCards from './components/FancyCards.tsx';

const AppPro = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
      </ScrollView>
    </SafeAreaView>
  );
};

//create stylesheet

export default AppPro;
