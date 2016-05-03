/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';


import Game from './Game';

class FlappyBirds extends Component {
  render() {
    return (
      <Game />
    );
  }
}


AppRegistry.registerComponent('FlappyBirds', () => FlappyBirds);
