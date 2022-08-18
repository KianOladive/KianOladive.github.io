console.log("hello world")

const buttonOne = document.getElementById("about-button-one")
const buttonTwo = document.getElementById("about-button-two")
const buttonThree = document.getElementById("about-button-three")

const mvoOne = document.getElementById("mission-container")
const mvoTwo = document.getElementById("vision-container")
const mvoThree = document.getElementById("objectives-container")

function buttonOneSelected() {
    console.log("button1")
    buttonTwo.classList.remove('about-button-selected')
    buttonThree.classList.remove('about-button-selected')
    mvoTwo.classList.remove('mvo-pane-selected')
    mvoThree.classList.remove('mvo-pane-selected')

    buttonOne.classList.add('about-button-selected')
    mvoOne.classList.add('mvo-pane-selected')
}

function buttonTwoSelected() {
    console.log("button2")
    buttonOne.classList.remove('about-button-selected')
    buttonThree.classList.remove('about-button-selected')
    mvoOne.classList.remove('mvo-pane-selected')
    mvoThree.classList.remove('mvo-pane-selected')

    buttonTwo.classList.add('about-button-selected')
    mvoTwo.classList.add('mvo-pane-selected')
}

function buttonThreeSelected() {
    console.log("button3")
    buttonOne.classList.remove('about-button-selected')
    buttonTwo.classList.remove('about-button-selected')
    mvoOne.classList.remove('mvo-pane-selected')
    mvoTwo.classList.remove('mvo-pane-selected')

    buttonThree.classList.add('about-button-selected')
    mvoThree.classList.add('mvo-pane-selected')
}