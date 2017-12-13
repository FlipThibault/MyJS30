function playSound(e) {

    const audioElement = document.querySelector(`audio[data-key="${e.keyCode}"]`)

    if(!audioElement) return

    audioElement.currentTime = 0
    audioElement.play()
}

const keys = [...document.querySelectorAll('.key')]

window.addEventListener('keydown', playSound)
