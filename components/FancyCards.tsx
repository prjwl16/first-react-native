import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const FancyCards = () => {
  const openLink = (link: string) => {
    console.log('Opening Link');
    Linking.openURL(link);
  };

  return (
    <View style={styles.box}>
      <Text style={styles.headingText}>Touchy Touchy</Text>
      <ScrollView>
        <TouchableOpacity onPress={() => openLink('https://www.google.com/')}>
          <Text>Hey,I'm a button</Text>
        </TouchableOpacity>
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

export default FancyCards;
