import { connect } from 'react-redux'
import { tick , bounce ,start , startAgain ,runGroundAlways } from  '../actions'
 
import Game from '../Game'

const mapStateToProps = (state, ownProps) => {
	return {
		bird : state.game.objects[0],
		pipeUp : state.game.objects[1],
		pipeDown : state.game.objects[2],
		invisible  : state.game.objects[3],
		pipeUpO  : state.game.objects[4],
		pipeDownO  : state.game.objects[5],
		invisibleO  : state.game.objects[6],
		ground : state.game.objects[7],
		groundO : state.game.objects[8],
		score : state.game.score,
		gameOver : state.game.gameOver,
		start : state.game.start
		//gameObjects : state.game.objects
	}
} 

const mapDispatchToProps = (dispatch) => {
	return{
		tick : (x) => {
			dispatch(tick(x));
		},
		bounce : () => {
			dispatch(bounce())
		},
		startGame : () => {
			dispatch(start())
		},
		startGameAgain : () => {
			dispatch(startAgain())
		},
		updateGround : () =>{
			dispatch(runGroundAlways())
		}
	

	}
} 

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);

export default GameContainer
