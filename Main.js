import React, { Component } from 'react-native';
import { Provider } from 'react-redux';

import GameContainer from './containers/GameContainer'

import {vw, vh, vmin, vmax} from './services/viewport';

import configureStore from './store/configureStore'

const initialState = {
    game: {
        gravity: 0.0001,
        objects: [
            {
                name: 'bird',
                position: {
                    x: 50,
                    y: 50
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
                static: false
            },
            {
                name: 'PipeUp',
                position: {
                    x: 100,
                    y: 0
                },
                velocity: {
                    x: -0.9,
                    y: 0
                },
                dimension: {
                    width: 10,
                    height: 40
                },
                rigid: true,
                static: false
            },
            {
                name: 'PipeDown',
                position: {
                    x: 100,
                    y: 100
                },
                velocity: {
                    x: -0.9,
                    y: 0
                },
                dimension: {
                    width: 10,
                    height: 40
                },
                rigid: true,
                static: false
            },
            {
                name: 'Invisible',
                position: {
                    x: 110,
                    y: 40
                },
                velocity: {
                    x: -0.9,
                    y: 0
                },
                dimension: {
                    width: 0,
                    height: 26
                },
                rigid: true,
                static: false
            }
        ],
        score: 0,
        gameOver : false,
        collidedArray : []
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




