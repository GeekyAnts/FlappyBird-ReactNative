import * as types from '../constants'


export function tick(dt){
	return { type : types.TICK , dt}
}


export function bounce(){
	return { type : types.BOUNCE }
}


export function start() {
	return {  type : types.START }
}

export function startAgain(){
	return { type : types.STARTAGAIN  }
}

export function	runGroundAlways(){
	return { type : types.RUNGROUNDALWAYS }
}

