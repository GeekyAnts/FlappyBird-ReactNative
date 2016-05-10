
import React, {
	Component,
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Image
} from 'react-native';

import {vw, vh, vmin, vmax} from './../services/viewport';


export default class Start extends Component {

	constructor() {
		super();
	}
	
	pressMe(){
		
		this.props.onStart();
	}

	render() {
		return (
			<View style={{ position: 'absolute', left: 27 * vmin, top: 30 * vmax }}  >
				<Image resizeMode="stretch"  source ={ require('./../images/flappybird-logo.png') }
					/>
				<TouchableOpacity activeOpacity={1} onPress={ this.pressMe.bind(this) } >
					<Image resizeMode="stretch"  style= {{ marginLeft : 26 }}    source ={ require('./../images/flappybird-tab.png') }
						/>
				</TouchableOpacity>
			</View>
		);
	}

}