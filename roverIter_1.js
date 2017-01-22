var myRover = {
  position: [0, 0],
  direction: 'N',
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

//
//prevent rover from falling off planet Mars!
function preventSuddenDeath() {
  if (myRover.position[0] > 9) {
    myRover.position[0] = 0;
  }
  if (myRover.position[0] < 0) {
    myRover.position[0] = 9;
  }
  if (myRover.position[1] > 9) {
    myRover.position[1] = 0;
  }
  if (myRover.position[1] < 0) {
    myRover.position[1] = 9;
  }
}

//
//change rover position
function newPosition(move) {

  //move rover forward
  if (move === 'f') {
    switch (myRover.direction) {
      case 'N':
        myRover.position[0] -= 1;
        break;
      case 'E':
        myRover.position[1] += 1;
        break;
      case 'S':
        myRover.position[0] += 1;
        break;
      case 'W':
        myRover.position[1] -= 1;
        break;
    }}

    //move rover backward
    if (move === 'b') {
      switch (myRover.direction) {
        case 'N':
          myRover.position[0] += 1;
          break;
        case 'E':
          myRover.position[1] -= 1;
          break;
        case 'S':
          myRover.position[0] -= 1;
          break;
        case 'W':
          myRover.position[1] += 1;
          break;
      }}

      preventSuddenDeath();
      return myRover.position;
  }

  //
  //change rover direction
  function newDirection(turn) {

    //turn rover left
    if (turn === 'l') {
      switch (myRover.direction) {
        case 'N':
          myRover.direction = 'W';
          break;
        case 'E':
          myRover.direction = 'N';
          break;
        case 'S':
          myRover.direction = 'E';
          break;
        case 'W':
          myRover.direction = 'S';
          break;
      }}

    //turn rover right
    if (turn === 'r') {
      switch (myRover.direction) {
          case 'N':
          myRover.direction = 'E';
          break;
        case 'E':
          myRover.direction = 'S';
          break;
        case 'S':
          myRover.direction = 'W';
          break;
        case 'W':
          myRover.direction = 'N';
          break;
    }}
      return myRover.direction;
  }



  console.log(newPosition('f'));
  console.log(newPosition('f'));
  console.log(newDirection('r'));
  console.log(newPosition('f'));
  console.log(newPosition('b'));
  console.log(newDirection('l'));
