document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("container");
    const winnerContainer = document.getElementById("winner-container");

    const instructionsPic = document.getElementById("inst-pic");


    if (window.localStorage.getItem("solved") == "true") {
        winnerContainer.style = `z-index: 2`;
        container.style = `opacity: 0`;
    }


    let solved = false;

    const word = "daong";
    const wordLength = word.length;

    createSquares();

    let guessedWords = [[]];
    let availableSpace = 1;
    let flip = true;
    let flipping = false;

    const yellow = "rgb(181, 159, 59)";
    const darkgray = "rgb(58, 58, 60)";
    const green = "rgb(83, 141, 78)";

    let gameOver = false;
    let guessedWordCount = 0;

    const animationDuration = 1.5;

    const keys = document.querySelectorAll(".keyboard-row button");

    function getCurrentWordArray() {
        const numberOfGuessedWords = guessedWords.length;
        return guessedWords[numberOfGuessedWords - 1];
    }

    function updateGuessedWords(letter) {
        const currentWordArr = getCurrentWordArray();

        if (currentWordArr && currentWordArr.length < wordLength) {
            currentWordArr.push(letter);

            const availableSpaceEl = document.getElementById(String(availableSpace));
            availableSpace = availableSpace + 1;

            availableSpaceEl.textContent = letter;
        };
    }

    function getTileColor(letter, index, currentWordArr) {
        const currentWord = currentWordArr.join('')
        const letterInThatPosition = word.charAt(index);
        const isCorrectLetter = word.includes(letter)
        const isCorrectPosition = letter === letterInThatPosition;

        var appearsElsewhere = false;
        var indexOfFirstAppearance = 5;
        var appearances = [];
        var greenSomewhereElse = false;


        appearances.push(index)
        for (let i=0; i<currentWordArr.length; i++) {
            if (letter == currentWord[i]) {
                indexOfFirstAppearance = Math.min(indexOfFirstAppearance, i)
            }
            if (letter == currentWord[i] && index != i) {
                appearsElsewhere = true;
                appearances.push(i)
            }
        }
        console.log(appearances)

        // conditionals
        if (!isCorrectLetter) {
            return darkgray;
        }
        else if (isCorrectPosition) {
            return green;
        }
        else if (appearsElsewhere) {
            for (let i=0; i<appearances.length; i++) {
                if (currentWord[appearances[i]] == word.charAt(appearances[i])) {
                    greenSomewhereElse = true;
                }
            }
            // if not the first of that letter in the current word or if it's green somewhere else
            if (index != indexOfFirstAppearance || greenSomewhereElse) {
                return darkgray;
            }
        }
        return yellow;
    }

    //function whichLetter()

    function handleSubmitWord() {

        const currentWordArr = getCurrentWordArray();
        if (currentWordArr.length !== wordLength && guessedWords.length < (wordLength + 1)) {
            window.alert("Word must be " + wordLength + " letters");
            return;
        }

        const currentWord = currentWordArr.join('');

        const firstLetterId = guessedWordCount*wordLength + 1;

        const interval = 200;
        currentWordArr.forEach((letter, index) => {
            flipping = true
            setTimeout(() => {
                const tileColor = getTileColor(letter, index, currentWordArr);

                const keyboardKey = document.getElementById(letter);

                if (tileColor === yellow) {
                    if (getComputedStyle(keyboardKey).getPropertyValue('background-color') == green) {
                        keyboardKey.style = `background-color: ${green};border-color${green}`;
                    }
                    else {
                        keyboardKey.style = `background-color: ${yellow};border-color${yellow}`;
                    }
                }
                else if (tileColor === green) {
                    keyboardKey.style = `background-color: ${green};border-color${green}`;
                }
                else if (tileColor === darkgray) {
                    if (getComputedStyle(keyboardKey).getPropertyValue('background-color') == green) {
                        keyboardKey.style = `background-color: ${green};border-color${green}`;
                    }
                    else if (getComputedStyle(keyboardKey).getPropertyValue('background-color') == yellow) {
                        keyboardKey.style = `background-color: ${yellow};border-color${yellow}`;
                    }
                    else {
                        keyboardKey.style = `background-color: ${darkgray};border-color${darkgray}`;
                    }
                }

                const letterID = firstLetterId+index;
                const letterEl = document.getElementById(letterID);
                letterEl.classList.add("animate__flipInX");
                letterEl.style = `background-color: ${tileColor};border-color${tileColor}`;
            }, interval * index);
        });

        
        if (flipping) {
            setTimeout(() => {
                flipping = false;
            }, wordLength*interval)
        }

        guessedWordCount+=1;

        if (currentWord === word) { 
            gameOver = true;
            solved = true;
            window.localStorage.setItem("solved", solved);
            setTimeout(() => {
                // window.alert("You got the word!\nPress OK")
                congratsAnimation()
                setTimeout(() => {
                    location.reload()
                }, animationDuration*1000 + 300);
            }, 500+(200*wordLength));
            return;
        }

        if (guessedWords.length === (wordLength + 1)) {
            gameOver = true;
            if (flip) {
                setTimeout(() => {
                    window.alert("Sorry, you have no more guesses!\n You can try again by refreshing this page!")
                }, 200+(200*wordLength));
                flip = false;
            }
            else {
                window.alert("Sorry, you have no more guesses!")
            }
            return;
        }

        guessedWords.push([])
    }

    function handleDel() {
        const currentWordArr = getCurrentWordArray();
        if (currentWordArr.length > 0) {
            currentWordArr.pop();
            
            guessedWords[guessedWords.length - 1] = currentWordArr;

            const lastLetterEl = document.getElementById(String(availableSpace - 1));

            lastLetterEl.textContent = '';
            availableSpace = availableSpace - 1;
        }
    }

    function showInstructions() {
        instructionsPic.style = `top: 0`
    }

    function closeInstructions() {
        instructionsPic.style = `top: 100%`

    }


    function createSquares() {
        const gameBoard = document.getElementById("board");

        for (let index = 0; index < wordLength*(wordLength+1); index++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.classList.add("animate__animated");
            square.setAttribute("id", index + 1);
            gameBoard.appendChild(square);
        }
    }


    function pressedLetter(pressed) {

        if (!gameOver && !flipping) {
            if (pressed === 'enter') {
                handleSubmitWord();
                return;
            }

            else if (pressed === 'del') {
                handleDel();
                return;
            }
            
            else if (pressed === 'instructions') {
                showInstructions();
                return;
            }
            
            else if (pressed === 'close-inst') {
                closeInstructions();
                return;
            }

            updateGuessedWords(pressed);
        }
    }


    function congratsAnimation() {
        const animateDiv = document.getElementById("animate")
        gsap.to(animateDiv, {duration: animationDuration, y: '-100%'})
    }


    function start() {
        if (window.localStorage.getItem("solved") == undefined) {
            window.localStorage.setItem("solved", solved);
        }

        if (window.localStorage.getItem("solved") == "true") {
            return;
        }

        // if it's their first time visiting the site, show instructions div
        if (!window.localStorage.getItem("first_time")) {
            instructionsPic.style = `top: 0`
            window.localStorage.setItem("first_time", false)
        }

        let letter = '';
        document.addEventListener("click", (e) => {
            e.preventDefault();
            // console.log(e.target.getAttribute('data-key'));
            if (e.target.getAttribute('data-key') != null) {
                letter = e.target.getAttribute('data-key');
    
                pressedLetter(letter);
            }
        })
    
        document.addEventListener("keyup", (e) => {
                
            if (e.code.slice(0,3) === "Key") {
                letter = e.code[3].toLowerCase()
                pressedLetter(letter);
            }
            else if (e.code === "Backspace") {
                letter = 'del'
                pressedLetter(letter);
            }
            else if (e.code === "Enter") {
                letter = 'enter';
                pressedLetter(letter);
            }
        })
        
    }


    start();

});