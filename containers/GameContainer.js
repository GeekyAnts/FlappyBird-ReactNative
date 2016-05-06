import { connect } from 'react-redux'
import { tick , bounce ,increaseScore, collitionDetected} from  '../actions'
 
import Game from '../Game'

const mapStateToProps = (state, ownProps) => {
	return {
		bird : state.game.objects[0],
		pipeUp : state.game.objects[1],
		pipeDown : state.game.objects[2],
		invisible  : state.game.objects[3],
		score : state.game.score,
		gameOver : state.game.gameOver
	}
} 

const mapDispatchToProps = (dispatch) => {
	return{
		tick : (x) => {
			dispatch(tick(x));
		},
		bounce : () => {
			dispatch(bounce())
		}
	

	}
} 

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);

export default GameContainer