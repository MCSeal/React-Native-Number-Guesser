import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Card from '../components/Card';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <Card>
      <View style={styles.screen}>
        <TitleText>The Game is Over!!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assests/success.png')}
            style={styles.image}
            resize="cover"
          />
        </View>
        <BodyText>
          Number of guesses needed:
          <Text style={styles.highlight}>{props.roundsNumber}</Text> Number
          chosen:
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>

        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  highlight: {
    color: colors.primary,
  },
});

export default GameOverScreen;
