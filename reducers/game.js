import { TICK , BOUNCE } from '../constants'

import {vw, vh, vmin, vmax} from '../services/viewport';


function getUpdatedVelocity( newPosition , bird, timeLapsed , gravity){
 	let updateVelocity = bird.velocity.y  + timeLapsed * gravity;
 	if(newPosition.y > 100) {
      updateVelocity = -(updateVelocity);
    }
 	return {  x :  bird.velocity.x, y : updateVelocity } 
 }


 function getUpdatedY(bird ,timeLapsed , gravity){
 		var distanceCovered = bird.velocity.y * timeLapsed + 0.5 * gravity * timeLapsed * timeLapsed;
 		return {  x : bird.position.x , y : bird.position.y + distanceCovered  }
 }


 function getUpdatedVelocityForPipe(pipe){
 		return { x : pipe.velocity.x, y : 0  }
 }

 function getUpdateDistanceForPipe(pipe,timeLapsed){

 	function getYPosition(pipeName){
 		if(pipeName == 'PipeUp')
 			return 0;
 		else if(pipeName == 'PipeDown')
 			return 100;
 		else if(pipeName == 'Invisible')
 			return 40;
 	}

 	var distanceCovered = pipe.velocity.x;
    
 	if(pipe.position.x > 0){
 		return { x : pipe.position.x + distanceCovered, y : pipe.position.y }	
 	}
 	else{
 		return { x : 100 , y : getYPosition(pipe.name) }
 	}
 }


function update(gameObjects, dt =  1000/60, gravity = 0.0001){
	var arr = [];
	gameObjects.map( item => {   
		if(item.name == 'bird'){
			var newPosition =  getUpdatedY(item,dt,gravity);
			var updatedVelocity = getUpdatedVelocity( newPosition,item,dt,gravity);			
			var newBird =  Object.assign( {} , item , 
				{ position : newPosition , velocity : updatedVelocity }  ) ;
			arr.push(newBird);
		}

		else if(item.name == 'PipeUp'){
			var newPositionOfPipe = getUpdateDistanceForPipe(item,dt);
			var updatedVelocity = getUpdatedVelocityForPipe(item);
			var newPipe  = 	Object.assign( {} , item , 
				{ position : newPositionOfPipe , velocity : updatedVelocity }  ) ;
			arr.push(newPipe);
		}

		else if(item.name == 'PipeDown'){
			var newPositionOfPipe = getUpdateDistanceForPipe(item,dt);
			var updatedVelocity = getUpdatedVelocityForPipe(item);
			var newPipe  = 	Object.assign( {} , item , 
				{ position : newPositionOfPipe , velocity : updatedVelocity }  ) ;
			arr.push(newPipe);
		}

		else if (item.name == 'Invisible') {
			var newPositionOfPipe = getUpdateDistanceForPipe(item,dt);
			var updatedVelocity = getUpdatedVelocityForPipe(item);
			var newPipe  = 	Object.assign( {} , item , 
				{ position : newPositionOfPipe , velocity : updatedVelocity }  ) ;
			arr.push(newPipe);
		}

		else{
			arr.push(item)
		}

	   })
	return arr;
}

function bounce(gameObjects){
	var arr = [];
	gameObjects.map( item => {
		if(item.name == 'bird'){
			var bounceUpdatedVelocity = { x : item.velocity.x , y : -0.05 }
			var newBird = Object.assign( {} , item , { velocity : bounceUpdatedVelocity} );
			arr.push(newBird);
		}
		else{
			arr.push(item)
		}
	})
  return arr;

}

function checkCollition(gameObjects){

	var bird = gameObjects[0];
	var pipeDown = gameObjects[1];
	var pipeUp = gameObjects[2];


	var birdXPostion = bird.position.x * vmin;
    var birdYPostion = bird.position.y * vmax;
    var birdWidth = bird.dimension.width * vmin;
    var birdHeight = bird.dimension.height * vmax;

    var pipeUpXPosition = pipeUp.position.x * vmin;
    var pipeUpYPosition = 0; 
    var pipeUpWidth = pipeUp.dimension.width * vmin;
    var pipeUpHeight = pipeUp.dimension.height * vmax;

    var pipeDownXPosition = pipeDown.position.x * vmin;
    var pipeDownWidth = pipeDown.dimension.width * vmin;
    var pipeDownHeight = pipeDown.dimension.height * vmax - 40;    
    var pipeDownYPosition = (100 * vmax) - pipeDownHeight ; 


    if (birdXPostion < pipeUpXPosition + pipeUpWidth &&
         birdXPostion + birdWidth > pipeUpXPosition &&
         birdYPostion< pipeUpYPosition+ pipeUpHeight &&
         birdHeight + birdYPostion > pipeUpYPosition) {
         return true;
        }
       

    if (birdXPostion < pipeDownXPosition + pipeDownWidth &&
         birdXPostion + birdWidth > pipeDownXPosition &&
         birdYPostion< pipeDownYPosition+ pipeDownHeight &&
         birdHeight + birdYPostion > pipeDownYPosition) {
        	return true;
        }

    else{

    	return false;
    }

}


function checkForScoreUp(gameObjects,score,collidedArray){
	var bird = gameObjects[0];
	var invisible = gameObjects[3];

	console.log("collidedArray", collidedArray)

	var birdXPostion = bird.position.x * vmin;
    var birdYPostion = bird.position.y * vmax;
    var birdWidth = bird.dimension.width * vmin;
    var birdHeight = bird.dimension.height * vmax;

    var invisibleXPosition = invisible.position.x * vmin;
    var invisibleYPosition = 40 * vmax; 
    var invisibleWidth = invisible.dimension.width * vmin;
    var invisibleHeight = invisible.dimension.height * vmax;



     if (birdXPostion < invisibleXPosition + invisibleWidth &&
         birdXPostion + birdWidth > invisibleXPosition &&
         birdYPostion< invisibleYPosition+ invisibleHeight &&
         birdHeight + birdYPostion > invisibleYPosition) 
 		 {
     		if(collidedArray.length  == 0){
     			score++;	
     		}
		 	return {score : score, collidedArray :  [invisible.name]};

        }
        else{
			return {score : score, collidedArray : []};        	
        }
    


        

}


const game = ( state = {} , action  ) => {
	switch (action.type){
		case TICK:
			return  Object.assign( {} , state ,
			 	{ 	objects : update(state.objects, action.dt, state.gravity) ,
		 			gameOver : checkCollition(state.objects),
		 			score : checkForScoreUp(state.objects,state.score,state.collidedArray).score,
		 			collidedArray : checkForScoreUp(state.objects,state.score,state.collidedArray).collidedArray  });
		case BOUNCE:
			return Object.assign( {} ,state, { objects : bounce(state.objects) } )
		default :
			return state
	}
}

export default game
