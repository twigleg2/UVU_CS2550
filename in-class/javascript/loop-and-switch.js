
function switchExample(finalScore) {
  switch (finalScore) {
    case 0:
      console.log("Better luck next time");
      break;
    case 1:
    case 2:
    case 3:
      console.log("You barely scraped by!")
      break;
    case 4:
    case 5:
    case 6:
      console.log("Not bad.");
      break;
    case 7:
    case 8:
    case 9:
      console.log("Pretty good!")
      break;
    case 10:
      console.log("You're a professional!");
      break;
    default:
      console.log("You broke the game!");
  }

}



function doWhileExample() {
  let timesLooped = 0;
  let loopAgain;

  do {
    loopAgain = false;
    let randomInt = Math.floor(Math.random() * 10);
    timesLooped++;

    console.log("your random number is: ", randomInt);
    if (randomInt != 0) {
      loopAgain = true;
    }

  } while (loopAgain)

  return timesLooped;
}
console.log("number of times the loop executed: ", doWhileExample());


let fruit = ["apple", "banana", "pear", "orange"];
function forInExample(collection) {

  for (let i in collection) {
    console.log(i);
  }

}

function forOfExample(collection) {

  for (let i of collection) {
    console.log(i);
  }

}
forInExample(fruit);
forOfExample(fruit);

// console.log(fruit[0]);
// console.log(fruit.push("pineapple"));
// console.log(fruit[4]);
// fruit.shift();
// console.log(fruit.length);
// console.log(fruit[0]);
// fruit.unshift("quince");
// console.log(fruit[0]);
