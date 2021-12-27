let order = []
let clickedOrder = []
let score = 0

/* 
0 - green
1 - red
2 - yellow
3 - blue
*/

const green = document.querySelector('.green')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const blue = document.querySelector('.blue')

// Create random color order
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4)
  order[order.length] = colorOrder
  clickedOrder = []

  for(let i in order) {
    let elementColor = createColorElement(order[i])
    lightColor(elementColor, Number(i) + 1)
  }
}

// Turn on next color
let lightColor = (element, time) => {
  time = time * 500
  setTimeout(() => {
    element.classList.add('selected')
  }, time - 250);
  setTimeout(() => {
    element.classList.remove('selected')
  }, time);
}

// Check if clicked buttons are equal to the ones generated
let checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] != order[i]) {
      gameOver()
      break
    }
  }
    if(clickedOrder.length == order.length) {
      alert(`Score: ${score}!\nYou got it right! Starting next level!`)
      nextLevel()
    }
}

// Player click function
let click = (color) => {
  clickedOrder[clickedOrder.length] = color
  console.log(`color: ${color} | clickedOrder: ${clickedOrder}`);

  createColorElement(color).classList.add('selected')
  
  setTimeout(() => {
    createColorElement(color).classList.remove('selected')
  }, 250);

  setTimeout(() => {
    checkOrder()
  }, 500);

}

// color-number to color-element
let createColorElement = (color) => {
  if(color == 0) {
    return green
  } else if (color == 1) {
    return red
  } else if (color == 2) {
    return yellow
  } else if (color == 3) {
    return blue
  }
}

// If player wins
let nextLevel = () => {
  score++
  shuffleOrder()
}

// If player loses
let gameOver = () => {
  alert(`Score: ${score}!\nYou lose!\nClick OK to start new game`)
  order = []
  clickedOrder = []

  playGame()
}

// Click events for the colors
green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

// Start the game
let playGame = () => {
  setTimeout(() => {
    alert(`Welcome to Genius!\nStarting new game!`)
    score = 0
  
    nextLevel()
  }, 500);
}

playGame()