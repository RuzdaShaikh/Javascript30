const secondHand = document.querySelector('.second')
const minuteHand = document.querySelector('.minute')
const hourHand = document.querySelector('.hour')

function clockTick() {
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    const secondsDegs = ((seconds / 60) * 360)
    const minutesDegs = ((minutes / 60) * 360)
    const hoursDegs = ((hours / 12) * 360)

    secondHand.style.transform = `rotate(${secondsDegs}deg)`
    minuteHand.style.transform = `rotate(${minutesDegs}deg)`
    hourHand.style.transform = `rotate(${hoursDegs}deg)`
}

setInterval(clockTick, 1000)

clockTick()