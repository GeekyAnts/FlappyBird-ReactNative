import React, {
  Component,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import {vw, vh, vmin, vmax} from './../services/viewport';


export default class Ground extends Component{

	constructor(){
		super();
	}

	componentDidMount(){

	}

	componentWillUnMount(){
	}
	

	render(){
		return(
			<View  style={{  position : 'absolute', left : this.props.x , top : this.props.y * vmax  }}  >
				<Image  resizeMode="stretch" source ={ require('./../images/flappybird-bg-brow.png')  } 
				 style ={{ width : this.props.width * vmin, height : this.props.height  *vmax }}   />
			</View>
		);
	}

}