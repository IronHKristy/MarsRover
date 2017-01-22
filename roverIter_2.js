var myRover = {
  position: [0, 0], //actual position of rover.
  checkPos: [0, 0], //variable to test for obstacle before moving rover.
  direction: 'N',
  obstacleA: [0, 2],
  obstacleB: [4, 5],
  obstacleC: [6, 9],
  marsGrid: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
};

console.log("The mars rover is starting at " + myRover.position + " and is headed " + myRover.direction);

function move_forward() {
  if (myRover.direction == 'N') {
    myRover.checkPos[0] -= 1;
  } else if (myRover.direction == 'E') {
    myRover.checkPos[1] += 1;
  } else if (myRover.direction == 'S') {
    myRover.checkPos[0] += 1;
  } else if (myRover.direction == 'W') {
    myRover.checkPos[1] -= 1;
  }
    preventSuddenDeath();
    checkObstacle();
}

function move_backward() {
  if (myRover.direction == 'N') {
    myRover.checkPos[0] += 1;
  } else if (myRover.direction == 'E') {
    myRover.checkPos[1] -= 1;
  } else if (myRover.direction == 'S') {
    myRover.checkPos[0] -= 1;
  } else if (myRover.direction == 'W') {
    myRover.checkPos[1] += 1;
  }
    preventSuddenDeath();
    checkObstacle();
}

function turn_left() {
  if (myRover.direction == 'N') {
    myRover.direction = 'W';
  } else if (myRover.direction == 'E') {
    myRover.direction = 'N';
  } else if (myRover.direction == 'S') {
    myRover.direction = 'E';
  } else if (myRover.direction == 'W') {
    myRover.direction = 'S';
  }
}

function turn_right() {
  if (myRover.direction == 'N') {
    myRover.direction = 'E';
  } else if (myRover.direction == 'E') {
    myRover.direction = 'S';
  } else if (myRover.direction == 'S') {
    myRover.direction = 'W';
  } else if (myRover.direction == 'W') {
    myRover.direction = 'N';
  }
}

/*this variable is declared outside of main() so it
can be accessed within checkObstacle()*/
var commandString;

function main() {
  var commandString = document.getElementById("command").value;
  var output = document.getElementById("demo");
  var csLength = commandString.length;
  var commandArray = [];

  for (var i=0; i < csLength; i++) {
  commandArray[i] = commandString[i];

    switch (commandArray[i]) {
      case 'f':
        move_forward();
        break;
      case 'b':
        move_backward();
        break;
      case 'l':
        turn_left();
        break;
      case 'r':
        turn_right();
        break;
                           }
    console.log("It is now at " + myRover.position + " and headed " + myRover.direction);
  }
}

/*prevent rover from falling off of planet Mars.
best attempt at wrapping a 2d array*/
function preventSuddenDeath() {
  if (myRover.checkPos[0] > 9) {
    myRover.checkPos[0] = 0;
  }
  if (myRover.checkPos[0] < 0) {
    myRover.checkPos[0] = 9;
  }
  if (myRover.checkPos[1] > 9) {
    myRover.checkPos[1] = 0;
  }
  if (myRover.checkPos[1] < 0) {
    myRover.checkPos[1] = 9;
  }
}

function checkObstacle() {
  //checks for obstacles and if found, resets rover position to unoccupied square
  if ((myRover.checkPos[0] == myRover.obstacleA[0] && myRover.checkPos[1] == myRover.obstacleA[1]) ||
      (myRover.checkPos[0] == myRover.obstacleB[0] && myRover.checkPos[1] == myRover.obstacleB[1]) ||
      (myRover.checkPos[0] == myRover.obstacleC[0] && myRover.checkPos[1] == myRover.obstacleC[1])) {

    console.log("An obstacle has been detected ahead at " + myRover.checkPos + ". Try changing direction.");
      myRover.checkPos[0] = myRover.position[0];
      myRover.checkPos[1] = myRover.position[1];
      commandString.length = 0;

//else assigns temp value, checkPos, to rover position
  } else {
    myRover.position[0] = myRover.checkPos[0];
    myRover.position[1] = myRover.checkPos[1];
  }
}
