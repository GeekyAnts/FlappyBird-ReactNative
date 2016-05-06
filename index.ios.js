/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from './Main'


/*import Game from './Game';

class FlappyBirds extends Component {
  render() {
    return (
      <Game />
    );
  }
}*/


AppRegistry.registerComponent('FlappyBirds', () => Main);
