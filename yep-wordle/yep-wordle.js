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

    const yellow = "rgb(181, 159, 59)";
    const darkgray = "rgb(58, 58, 60)";
    const green = "rgb(83, 141, 78)";

    let gameOver = false;
    let guessedWordCount = 0;

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

    function getTileColor(letter, index) {
        const isCorrectLetter = word.includes(letter)

        if (!isCorrectLetter) {
            return darkgray;
        }

        const letterInThatPosition = word.charAt(index);
        const isCorrectPosition = letter === letterInThatPosition;

        if (isCorrectPosition) {
            return green;
        }
        return yellow;
    }

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
            setTimeout(() => {
                const tileColor = getTileColor(letter, index);

                const keyboardKey = document.getElementById(letter);

                if (tileColor === yellow) {
                    if (getComputedStyle(keyboardKey).getPropertyValue('background-color') != green) {
                        keyboardKey.style = `background-color: ${tileColor};border-color${tileColor}`;
                    }
                }
                else {
                    keyboardKey.style = `background-color: ${tileColor};border-color${tileColor}`;
                }

                const letterID = firstLetterId+index;
                const letterEl = document.getElementById(letterID);
                letterEl.classList.add("animate__flipInX");
                letterEl.style = `background-color: ${tileColor};border-color${tileColor}`;
            }, interval * index);
        });

        guessedWordCount+=1;

        if (currentWord === word) { 
            gameOver = true;
            solved = true;
            window.localStorage.setItem("solved", solved);
            setTimeout(() => {
                window.alert("You got the word!\nPress OK")
                location.reload()
            }, 200+(200*wordLength));
            return;
        }

        if (guessedWords.length === (wordLength + 1)) {
            gameOver = true;
            if (flip) {
                setTimeout(() => {
                    window.alert("Sorry, you have no more guesses!")
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

        if (!gameOver) {
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


    function start() {
        if (window.localStorage.getItem("solved") == undefined) {
            window.localStorage.setItem("solved", solved);
        }

        if (window.localStorage.getItem("solved") == "true") {
            return;
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