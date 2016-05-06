import * as types from '../constants'


export function tick(dt){
	return { type : types.TICK , dt}
}


export function bounce(){
	return { type : types.BOUNCE }
}

