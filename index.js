const CAR = 'car'
const GOAT = 'goat'
const doors = [GOAT, GOAT, CAR]

const randomPick = (min, max) => {
  const range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
}

const runGame = (switchDoor) => {
    // checkPseudoRandomDistribution()
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


    // console.log(' concurrent: ', concurrentPick)
    if (switchDoor) {
        const otherOption = [0, 1, 2].filter(item => item !== concurrentPick && item != hostPick)[0]
        concurrentPick = otherOption
        // console.log('       host: ', hostPick)
        // console.log(' concurrent: ', concurrentPick)
        // console.log('otherOption: ', otherOption)
        // console.log('SWITCHED')
    }

    const concurrentWon = doors[concurrentPick] === 'car'
    return concurrentWon
}



const init = () => {
    runSample(false)
    runSample(true)
}

const RUNS = 1000000

const runSample = (switchDoor) => {
    let wons = 0
    let losts = 0
    for (i = 0; i < RUNS; i++) {
        const won = runGame(switchDoor)
        won ? wons++ : losts++
    }
    console.log(switchDoor ? 'SWITCHING': 'NOT SWITCHING')
    console.log(` wons: ${wons} (${wons/RUNS})`)
    console.log(`losts: ${losts} (${losts/RUNS})`)
    
}

const checkPseudoRandomDistribution = () => {
    const SAMPLE = 30000000
    const map = { 0:0, 1:0, 2:0 }
    for (let i = 0; i < SAMPLE; i++) {
        const result = randomPick(0, 2)
        map[result]++
    }
    console.log(map)
    console.log('0', map[0]/SAMPLE)
    console.log('1', map[1]/SAMPLE)
    console.log('2', map[2]/SAMPLE)
}

init()