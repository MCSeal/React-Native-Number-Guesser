import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Card from '../components/Card';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <ScrollView>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 20,
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
