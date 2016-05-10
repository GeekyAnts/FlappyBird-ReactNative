'use strict';

var React = require('react-native')
  , Dimensions = React.Dimensions || require('Dimensions')
  , {width, height} = Dimensions.get('window');

var units = {
  vw: width/100
, vh: height/100
};

units.vmin = Math.min(units.vw, units.vh);
units.vmax = Math.max(units.vw, units.vh);



units.heightOfPipeUp =  25;
units.heightOfPipeDown = 25;
units.heightOfGround = 20;
units.heightOfInvisibleArea =  100 -  (units.heightOfPipeUp + units.heightOfPipeDown + units.heightOfGround);
units.positionOfPipeDown =  units.heightOfInvisibleArea + units.heightOfPipeUp;

module.exports = units;