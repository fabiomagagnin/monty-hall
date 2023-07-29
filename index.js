const CAR = 'car'
const GOAT = 'goat'
const doors = [GOAT, GOAT, CAR]
const RUNS = 1000000

const randomPick = (min, max) => {
  const range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
}

const runGame = (switchDoor) => {
    let concurrentPick = randomPick(0, 2)
    let hostPick = null

    if (doors[concurrentPick] === CAR) {
        if (concurrentPick === 0) {
            hostPick = randomPick(1, 2)
        } else if (concurrentPick === 1) {
            const random = randomPick(0, 1)
            hostPick = random === 0 ? random : random + 1
        } else if (concurrentPick === 2) {
            hostPick = randomPick(0, 1)
        }
    } else {
        const otherOption = [0, 1, 2].filter(item => item !== concurrentPick && doors[item] !== CAR)[0]
        hostPick = otherOption
    }

    if (switchDoor) {
        const otherOption = [0, 1, 2].filter(item => item !== concurrentPick && item != hostPick)[0]
        concurrentPick = otherOption
    }

    const concurrentWon = doors[concurrentPick] === 'car'
    return concurrentWon
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