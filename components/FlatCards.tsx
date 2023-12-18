import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const FlatCards = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.headingText}>Flat Cards</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={[styles.card, styles.cardOne, styles.container]}>
          <Text>Card One</Text>
        </View>
        <View style={[styles.card, styles.cardTwo, styles.container]}>
          <Text>Card One</Text>
        </View>
        <View style={[styles.card, styles.cardThree, styles.container]}>
          <Text>Card One</Text>
        </View>
        <View style={[styles.card, styles.cardFour, styles.container]}>
          <Text>Card One</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    margin: 4,
  },
  headingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 100,
    height: 100,
    margin: 4,
    borderRadius: 5,
  },
  cardOne: {
    backgroundColor: '#ddb1b1',
  },
  cardTwo: {
    backgroundColor: '#b1ddb1',
  },
  cardThree: {
    backgroundColor: '#b1b1dd',
  },
  cardFour: {
    backgroundColor: '#ddddb1',
  },
});

export default FlatCards;
