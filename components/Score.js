
import React, {
	Component,
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Image
} from 'react-native';

import {vw, vh, vmin, vmax} from './../services/viewport';


export default class Score extends Component {

	constructor() {
		super();
	}


	componentDidMount() {

	}

	componentWillUnMount() {
	}
	
	
 	 getImageSourceLink(num){

		switch (num) {
			case "0":
				return require("./../images/flappybird_00.png");
			case "1":
				return require("./../images/flappybird_01.png");
			case "2":
				return require("./../images/flappybird_02.png");
			case "3":
				return require("./../images/flappybird_03.png");
			case "4":
				return require("./../images/flappybird_04.png");
			case "5":
				return require("./../images/flappybird_05.png");
			case "6":
				return require("./../images/flappybird_06.png");
			case "7":
				return require("./../images/flappybird_07.png");
			case "8":
				return require("./../images/flappybird_08.png");
			case "9":
				return require("./../images/flappybird_09.png");
			default:
				return require("./../images/flappybird_00.png");
		}
		
		
	}


	render() {
		var scoreString = this.props.score.toString();
		
		var scoreArray = [];
		
		for (var index = 0; index < scoreString.length; index++) {
			scoreArray.push(scoreString[index]);
		}
		
		return (
			<View style={{ position: 'absolute', left: 47 * vmin, top: 20 * vmax, flexDirection : 'row'}}  >
				{ scoreArray.map( function (item) {
					return <Image resizeMode="stretch"  source ={ this.getImageSourceLink(item) }/>
				    }.bind(this))  }
					
			</View>
		);
	}

}