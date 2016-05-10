
import React, {
	Component,
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Image
} from 'react-native';

import {vw, vh, vmin, vmax} from './../services/viewport';


export default class StartAgain extends Component {

	constructor() {
		super();
	}
	
	pressMe(){
		this.props.onStartAgain();
	}

	render() {
		return (
			<View style={{ position: 'absolute', left: 35 * vmin, top: 40 * vmax }}  >
				<TouchableOpacity activeOpacity={1} onPress={ this.pressMe.bind(this) } >
					<Image resizeMode="stretch"  source ={ require('./../images/flappybird_play.png') }
						/>
				</TouchableOpacity>
			</View>
		);
	}

}