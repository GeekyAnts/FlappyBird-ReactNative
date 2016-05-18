import React, { Component } from 'react-native';
import { Provider } from 'react-redux';

import GameContainer from './containers/GameContainer'

import {vw, vh, vmin, vmax , heightOfPipeUp , 
       heightOfPipeDown ,  heightOfGround , heightOfInvisibleArea ,
       positionOfPipeDown     } from './services/viewport';

import configureStore from './store/configureStore'

const initialState = {
    game: {
        gravity: 0.0001,
        objects: [
            {
                name: 'bird',
                position: {
                    x: 46,
                    y: 55
                },
                velocity: {
                    x: 0,
                    y: 0
                },
                dimension: {
                    width: 10,
                    height: 8
                },
                rigid: true,
                static: false,
                invisible : false
            },
            {
                name: 'PipeUp',
                position: {
                    x: 110,
                    y: 0
                },
                velocity: {
                    x: -0.9,
                    y: 0
                },
                dimension: {
                    width: 15,
                    height: heightOfPipeUp
                },
                rigid: true,
                static: true,
                invisible : false
            },
            {
                name: 'PipeDown',
                position: {
                    x: 110,
                    y: positionOfPipeDown
                },
                velocity: {
                    x: -0.9,
                    y: 0
                },
                dimension: {
                    width: 15,
                    height: heightOfPipeDown
                },
                rigid: true,
                static: true,
                invisible : false
            },
            {
                name: 'Invisible',
                position: {
                    x: 110,
                    y: heightOfPipeUp
                },
                velocity: {
                    x: -0.9,
                    y: 0
                },
                dimension: {
                    width: 15,
                    height: heightOfInvisibleArea
                },
                rigid: true,
                static: true,
                invisible : true
            },
            {
                name: 'PipeUp',
                position: {
                    x: 150,
                    y: 0
                },
                velocity: {
                    x: -0.9,
                    y: 0
                },
                dimension: {
                    width: 15,
                    height: heightOfPipeUp
                },
                rigid: true,
                static: true,
                invisible : false
            },
            {
                name: 'PipeDown',
                position: {
                    x: 150,
                    y: positionOfPipeDown
                },
                velocity: {
                    x: -0.9,
                    y: 0
                },
                dimension: {
                    width: 15,
                    height: heightOfPipeDown
                },
                rigid: true,
                static: true,
                invisible : false
            },
            {
                name: 'Invisible',
                position: {
                    x: 150,
                    y: heightOfPipeUp
                },
                velocity: {
                    x: -0.9,
                    y: 0
                },
                dimension: {
                    width: 15,
                    height: heightOfInvisibleArea
                },
                rigid: true,
                static: true,
                invisible : true
            },
            
            {
                name : "Ground",
                position : {
                    x : 0,
                    y : 80
                },
                velocity : {
                    x : -1,
                    y : 0
                },
                dimension : {
                    width :  100,
                    height : heightOfGround
                },
                rigid : false,
                static: true,
                invisible : true 
            },
             {
                name : "Ground",
                position : {
                    x : 100,
                    y : 80
                },
                velocity : {
                    x :  -1,
                    y : 0
                },
                dimension : {
                    width :  100,
                    height : heightOfGround
                },
                rigid : false,
                static: true,
                invisible : true 
            }
        ],
        score: 0,
        gameOver : false,
        collidedArray : [],
        start : false
    }
}



let store = configureStore(initialState);


const Main = () => {
  return (
    <Provider store={store}>
      <GameContainer  />
    </Provider>
  )
}

export default Main




