/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import {vw, vh, vmin, vmax} from './services/viewport';

import Bird from "./components/Bird";

const styles = StyleSheet.create({

  image: {
    flex: 1,
    resizeMode: 'cover',
    alignSelf: 'stretch',
    width: null,
  }
})


export default class Game extends Component {

  constructor() {

    super();
    this.state = { animate: true };

  console.log(vw, vh, '@@@@@');

  }

  componentDidMount() {
    setTimeout( () => this.setState({animate: false}), 2000);
    setTimeout( () => this.setState({animate: true}), 5000);
  }

  render() {
    return (
      <Image
        style={ styles.image }
        resizeMode='contain'
        source={ require('./images/bg.png') }> 
          <View style={{position: 'absolute', top: 0, left: 0}}>
            <Bird x={50*vw} y={50*vh} rotation={30} animate={this.state.animate}  />
          </View>
      </Image>
    );
  }
}
