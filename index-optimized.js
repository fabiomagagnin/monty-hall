const CAR = 'car'
const GOAT = 'goat'
const doors = [GOAT, GOAT, CAR]
const RUNS = 1000000

const randomPick = (min, max) => {
  const range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
}

/**
 * Returns true if the concurrent won the game (picked the car)
 * @param {*} switchDoor indicate if the concurrent must switch the door
 * @returns 
 */
const runGame = (switchDoor) => {
    const concurrentPick = randomPick(0, 2)
    const carSelected = doors[concurrentPick] === CAR
    const result = (carSelected && !switchDoor) || (!carSelected && switchDoor)
    return result
}

const runSample = (switchDoor) => {
    let wins = 0
    let losts = 0
    for (i = 0; i < RUNS; i++) {
        const won = runGame(switchDoor)
        won ? wins++ : losts++
    }
    console.log(switchDoor ? '\n--- Switching the door ---' : '--- Not switching the door ---')
    console.log(` runs: ${RUNS}`)
    console.log(` wins: ${wins} (${ wins / RUNS })`)
    console.log(`losts: ${losts} (${ losts / RUNS})`)
}

const init = () => {
    runSample(false)
    runSample(true)
}

init()