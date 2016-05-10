
import React, {
  Component,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import {vw, vh, vmin, vmax} from './../services/viewport';


export default class Invisible extends Component{

	constructor(){
		super();
	}

	componentDidMount(){

	}

	componentWillUnMount(){
	}
	

	render(){
		return(
			<View  style={{  position : 'absolute', left : this.props.x , top : this.props.y*vmax  }}  >
				<Text style ={{ width : this.props.width * vmin, height : this.props.height  *vmax }}>  </Text>
			</View>
		);
	}

}