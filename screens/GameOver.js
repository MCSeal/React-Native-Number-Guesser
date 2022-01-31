import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';

const GameOverScreen = (props) => {
  return (
    <Card>
      <View style={styles.screen}>
        <Text>The Game is Over!</Text>
        <Text>Number of guesses: {props.roundsNumber}</Text>
        <Text>Number chosen: {props.userNumber}</Text>
        <Button title="NEW GAME" onPress={props.onRestart}></Button>
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
});

export default GameOverScreen;
