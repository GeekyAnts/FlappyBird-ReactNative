
import React, {
  Component,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import {vw, vh, vmin, vmax} from './../services/viewport';


export default class GameOver extends Component{

	constructor(){
		super();
	}

	componentDidMount(){

	}

	componentWillUnMount(){
	}
	

	render(){
		return(
			<View style={{ position : 'absolute', left : 25 * vmin, top : 30 * vmax  }}  >
				<Image resizeMode="stretch"  source ={ require('./../images/flappybird_gameover.png')}
				    />
			</View>
		);
	}

}