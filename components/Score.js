
import React, {
  Component,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import {vw, vh, vmin, vmax} from './../services/viewport';


export default class Score extends Component{

	constructor(){
		super();
	}

	componentDidMount(){

	}

	componentWillUnMount(){
	}
	

	render(){
		return(
			<View >
				<Text >
			           { this.props.score }
			    </Text>
			</View>
		);
	}

}