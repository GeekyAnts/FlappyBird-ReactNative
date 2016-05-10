import { TICK , BOUNCE , START ,STARTAGAIN  } from '../constants'

import {vw, vh, vmin, vmax , heightOfPipeUp , 
       heightOfPipeDown ,  heightOfGround , heightOfInvisibleArea ,
       positionOfPipeDown     }  from '../services/viewport';


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
 			return positionOfPipeDown;
 		else if(pipeName == 'Invisible')
 			return heightOfPipeUp;
 	}

 	var distanceCovered = pipe.velocity.x;
    
 	if(pipe.position.x > 0 - pipe.dimension.width){
 		return { x : pipe.position.x + distanceCovered, y : pipe.position.y }	
 	}
 	else{
 		return { x : 100 , y : getYPosition(pipe.name) }
 	}
 }


function update(gameObjects, dt =  1000/60, gravity = 0.0001){
	var arr = [];
	gameObjects.map( item => {   
		if(item.static == false){
			var newPosition =  getUpdatedY(item,dt,gravity);
			var updatedVelocity = getUpdatedVelocity( newPosition,item,dt,gravity);			
			var newBird =  Object.assign( {} , item , 
				{ position : newPosition , velocity : updatedVelocity }  ) ;
			arr.push(newBird);
		}

		else if(item.static == true){
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
	var item = gameObjects[0];
	var bounceUpdatedVelocity = { x : item.velocity.x , y : -0.05 }
	var newBird = Object.assign( {} , item , { velocity : bounceUpdatedVelocity} );
	arr.push(newBird);
  	return arr.concat(gameObjects.slice(1));
}


function   detectCollition(bird , visibleObject){
	function getYPostionForCollitionDetection(item){
		if(item.name == 'PipeUp'){
			return 0
		}
		else if(item.name == 'PipeDown'){
			return (100 * vmax) - (item.dimension.height * vmax - 40);
		}
	}




	var birdXPostion = bird.position.x * vmin;
    var birdYPostion = bird.position.y * vmax;
    var birdWidth = bird.dimension.width * vmin;
    var birdHeight = bird.dimension.height * vmax;


    var visibleObjectXPosition = visibleObject.position.x * vmin;
    var visibleObjectYPosition = getYPostionForCollitionDetection(item); 
    var visibleObjectWidth = visibleObject.dimension.width * vmin;
    var visibleObjectHeight =   
    				item.name == 'PipeDown' ? visibleObject.dimension.height * vmax - 40 : 
    										visibleObject.dimension.height;


    if (birdXPostion < visibleObjectXPosition + visibleObjectWidth &&
         birdXPostion + birdWidth > visibleObjectXPosition &&
         birdYPostion< visibleObjectYPosition+ visibleObjectHeight &&
         birdHeight + birdYPostion > visibleObjectYPosition) {
         return true;
        }
    else{
    	return false;
    }
		
}

function checkForCollition(gameObjects){

	var bird = gameObjects[0];
	var pipeDown = gameObjects[2];
	var pipeUp = gameObjects[1];
	var pipeUpO = gameObjects[4];
	var pipeDownO = gameObjects[5];
	var ground = gameObjects[7];



	var birdsample = gameObjects.filter( (item) => {  if(!item.static) { return item } } )
	var visibleObjects = gameObjects.filter((item) => {  if(!item.invisible  && item.static) { return item  }} )


//	console.log(visibleObjects);



	//return visibleObjects.map((item)  => {  
	//	detectCollition( birdsample , visibleObjects  )} )





	var birdXPostion = bird.position.x * vmin;
    var birdYPostion = bird.position.y * vmax;
    var birdWidth = bird.dimension.width * vmin;
    var birdHeight = bird.dimension.height * vmax;

    var pipeUpXPosition = pipeUp.position.x * vmin;
    var pipeUpYPosition = 0; 
    var pipeUpWidth = pipeUp.dimension.width * vmin;
    var pipeUpHeight = pipeUp.dimension.height * vmax;


    var pipeUpOXPosition = pipeUpO.position.x * vmin;
    var pipeUpOYPosition = 0; 
    var pipeUpOWidth = pipeUpO.dimension.width * vmin;
    var pipeUpOHeight = pipeUpO.dimension.height * vmax;

    var pipeDownXPosition = pipeDown.position.x * vmin;
    var pipeDownWidth = pipeDown.dimension.width * vmin;
    var pipeDownHeight = pipeDown.dimension.height * vmax;    
    var pipeDownYPosition = pipeDown.position.y * vmax ; 


    var pipeDownOXPosition = pipeDownO.position.x * vmin;
    var pipeDownOWidth = pipeDownO.dimension.width * vmin;
    var pipeDownOHeight = pipeDownO.dimension.height * vmax;    
    var pipeDownOYPosition = pipeDownO.position.y * vmax ; 

    var groundXPosition = ground.position.x * vmin;
    var groundWidth = ground.dimension.width * vmin;
    var groundHeight = ground.dimension.height * vmax;
    var groundYPosition = ground.position.y * vmax;


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
    if (birdXPostion < pipeUpOXPosition + pipeUpOWidth &&
         birdXPostion + birdWidth > pipeUpOXPosition &&
         birdYPostion< pipeUpOYPosition+ pipeUpOHeight &&
         birdHeight + birdYPostion > pipeUpOYPosition) {
         return true;
        }
       
	if (birdXPostion < pipeDownOXPosition + pipeDownOWidth &&
         birdXPostion + birdWidth > pipeDownOXPosition &&
         birdYPostion< pipeDownOYPosition+ pipeDownOHeight &&
         birdHeight + birdYPostion > pipeDownOYPosition) {
        	return true;
        }

    if (birdXPostion < groundXPosition + groundWidth &&
	     birdXPostion + birdWidth > groundXPosition &&
	     birdYPostion< groundYPosition+ groundHeight &&
	     birdHeight + birdYPostion > groundYPosition) {
	    	return true;
    }

    else{

    	return false;
    }
}


function checkForScoreUp(gameObjects,score,collidedArray){
	var bird = gameObjects[0];
	var invisible = gameObjects[3];
	var invisibleO = gameObjects[6];

	

	var birdXPostion = bird.position.x * vmin;
    var birdYPostion = bird.position.y * vmax;
    var birdWidth = bird.dimension.width * vmin;
    var birdHeight = bird.dimension.height * vmax;

    var invisibleXPosition = invisible.position.x * vmin;
    var invisibleYPosition = invisible.position.y * vmax; 
    var invisibleWidth = invisible.dimension.width * vmin;
    var invisibleHeight = invisible.dimension.height * vmax;

    var invisibleOXPosition = invisibleO.position.x * vmin;
    var invisibleOYPosition = invisible.position.y * vmax; 
    var invisibleOWidth = invisibleO.dimension.width * vmin;
    var invisibleOHeight = invisibleO.dimension.height * vmax;



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
  	  if (birdXPostion < invisibleOXPosition + invisibleOWidth &&
	     birdXPostion + birdWidth > invisibleOXPosition &&
	     birdYPostion< invisibleOYPosition+ invisibleOHeight &&
	     birdHeight + birdYPostion > invisibleOYPosition) 
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

const startAgainState = {
    game: {
        gravity: 0.0001,
        objects: [
            {
                name: 'bird',
                position: {
                    x: 50,
                    y: 55
                },
                velocity: {
                    x: 0,
                    y: 0
                },
                dimension: {
                    width: 10,
                    height: 8
                },
                rigid: true,
                static: false,
                invisible : false
            },
            {
                name: 'PipeUp',
                position: {
                    x: 110,
                    y: 0
                },
                velocity: {
                    x: -0.9,
                    y: 0
                },
                dimension: {
                    width: 15,
                    height: heightOfPipeUp
                },
                rigid: true,
                static: true,
                invisible : false
            },
            {
                name: 'PipeDown',
                position: {
                    x: 110,
                    y: positionOfPipeDown
                },
                velocity: {
                    x: -0.9,
                    y: 0
                },
                dimension: {
                    width: 15,
                    height: heightOfPipeDown
                },
                rigid: true,
                static: true,
                invisible : false
            },
            {
                name: 'Invisible',
                position: {
                    x: 110,
                    y: heightOfPipeUp
                },
                velocity: {
                    x: -0.9,
                    y: 0
                },
                dimension: {
                    width: 15,
                    height: heightOfInvisibleArea
                },
                rigid: true,
                static: true,
                invisible : true
            },
            {
                name: 'PipeUp',
                position: {
                    x: 150,
                    y: 0
                },
                velocity: {
                    x: -0.9,
                    y: 0
                },
                dimension: {
                    width: 15,
                    height: heightOfPipeUp
                },
                rigid: true,
                static: true,
                invisible : false
            },
            {
                name: 'PipeDown',
                position: {
                    x: 150,
                    y: positionOfPipeDown
                },
                velocity: {
                    x: -0.9,
                    y: 0
                },
                dimension: {
                    width: 15,
                    height: heightOfPipeDown
                },
                rigid: true,
                static: true,
                invisible : false
            },
            {
                name: 'Invisible',
                position: {
                    x: 150,
                    y: heightOfPipeUp
                },
                velocity: {
                    x: -0.9,
                    y: 0
                },
                dimension: {
                    width: 15,
                    height: heightOfInvisibleArea
                },
                rigid: true,
                static: true,
                invisible : true
            },
            
            {
                name : "Ground",
                position : {
                    x : 0,
                    y : 80
                },
                velocity : {
                    x : -0.9,
                    y : 0
                },
                dimension : {
                    width :  100,
                    height : heightOfGround
                },
                rigid : true 
            }
        ],
        score: 0,
        gameOver : false,
        collidedArray : [],
        start : true
    }
}





const game = ( state = {} , action  ) => {
	switch (action.type){
		case TICK:
			return  Object.assign( {} , state ,
			 	{ 	objects : update(state.objects, action.dt, state.gravity) ,
		 			gameOver : checkForCollition(state.objects),
		 			score : checkForScoreUp(state.objects,state.score,state.collidedArray).score,
		 			collidedArray : checkForScoreUp(state.objects,state.score,state.collidedArray).collidedArray  });
		case BOUNCE:
			return Object.assign( {} ,state, { objects : bounce(state.objects) } );
		case START:
			return Object.assign( {} , state, { start : true}   );
		case STARTAGAIN:
			return startAgainState.game;
		default :
			return state
	}
}

export default game
