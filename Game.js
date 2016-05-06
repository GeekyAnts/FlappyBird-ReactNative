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
import PipeUp from "./components/PipeUp";
import PipeDown from "./components/PipeDown";
import GameOver from "./components/GameOver";
import Score from "./components/Score";
import Invisible from "./components/Invisible";


const styles = StyleSheet.create({

  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  }
})

export default class Game extends Component {

  constructor() {
    super();
    this.gravity = 0.0001;
    this.state = { animate: true};
  }

  componentDidMount() {

    console.log(vw, vh, vmin, vmax);
    console.log( this.props.score ,  this.props.gameOver );
    this.intervalId = setInterval( this.update.bind(this) , 1000/60); 
  }



  componentWillUpdate(nextProps, nextState) {
      if(nextProps.gameOver){
        clearInterval(this.intervalId)
      }



  }


  update() {
    var timeLapsed = 1000/60;
    this.props.tick(timeLapsed);
  }


  clickMeToBounce(){
      this.props.bounce();
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={1} onPress={ this.clickMeToBounce.bind(this)}  style={ styles.image} >
        <Image 
          style={ styles.image }
          
          source={ require('./images/bg.png') }> 
            <View  style={{position: 'absolute', top: 0, left: 0}}>


                 <Score  score = { this.props.score}  />

                 { this.props.gameOver ?  <GameOver />  : <Text>Good</Text> }
                 
                 <PipeUp x ={this.props.pipeUp.position.x * vmin}   y ={this.props.pipeUp.position.y}  
                          height = {this.props.pipeUp.dimension.height} 
                          width = { this.props.pipeUp.dimension.width } />
                 <Invisible x ={this.props.invisible.position.x * vmin}   y ={this.props.invisible.position.y}  
                          height = {this.props.invisible.dimension.height} 
                          width = { this.props.invisible.dimension.width } />
                 <PipeDown x ={this.props.pipeDown.position.x * vmin}   y ={this.props.pipeDown.position.y * vmax}  
                          height = {this.props.pipeDown.dimension.height} 
                          width = { this.props.pipeDown.dimension.width }   />
                 <Bird  x={ this.props.bird.position.x *vw} y={  this.props.bird.position.y *vh} rotation={30} animate={this.state.animate} 
                          height = {this.props.bird.dimension.height} 
                          width = { this.props.bird.dimension.width }   />
            </View> 
        </Image>
      </TouchableOpacity>
     
    );


  }
}

