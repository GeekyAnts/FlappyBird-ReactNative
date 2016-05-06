
import React, {
  Component,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import {vw, vh, vmin, vmax} from './../services/viewport';


export default class PipeUp extends Component{

	constructor(){
		super();
	}

	componentDidMount(){

	}

	componentWillUnMount(){

	}
	render(){
		return(
			<View  style={{ position : 'absolute', left : this.props.x , top : this.props.y  }}  >
				<Image resizeMode="stretch"  source ={ require('./../images/pipe-down.png')}
				   style ={{ width : this.props.width * vmin, height : this.props.height  *vmax }}   />
			</View>
		);
	}

}