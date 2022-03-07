document.addEventListener("DOMContentLoaded", () => {

    const wordLength = 4;
    createSquares();

    let guessedWords = [[]];
    let availableSpace = 1;

    const word = "ahon";
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
            return "rgb (58,58,60)";
        }

        const letterInThatPosition = word.charAt(index);
        const isCorrectPosition = letter === letterInThatPosition;

        if (isCorrectPosition) {
            return "rgb(83,141,78)";
        }
        return "rgb(181,159,59)";
    }

    function handleSubmitWord() {
        const currentWordArr = getCurrentWordArray();
        if (currentWordArr.length !== wordLength) {
            window.alert("Word must be " + wordLength + " letters");
            return;
        }

        const currentWord = currentWordArr.join('');

        const firstLetterId = guessedWordCount*wordLength + 1;

        const interval = 200;
        currentWordArr.forEach((letter, index) => {
            setTimeout(() => {
                const tileColor = getTileColor(letter, index);

                const letterID = firstLetterId+index;
                const letterEl = document.getElementById(letterID);
                letterEl.classList.add("animate__flipInX");
                letterEl.style = `background-color: ${tileColor};border-color${tileColor}`;
            }, interval * index);
        });

        guessedWordCount+=1;

        if (currentWord === word) {
            setTimeout(() => {
                window.alert("Congratulations!")
            }, 200+(200*wordLength));
        }

        if (guessedWords.length === (wordLength + 1)) {
            window.alert("Sorry, you have no more guesses")
        }

        guessedWords.push([])
    }

    function handleDel() {
        const currentWordArr = getCurrentWordArray();
        const removedLetter = getCurrentWordArray.pop();
        
        guessedWords[guessedWords.length - 1] = currentWordArr;

        const lastLetterEl = document.getElementById(String(availableSpace - 1));

        lastLetterEl.textContent = '';
        availableSpace = availableSpace - 1;
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


    for (let index = 0; index < keys.length; index++) {
        keys[index].onclick = ({ target }) => {
            const letter = target.getAttribute("data-key");

            if (letter === 'enter') {
                handleSubmitWord();
                return
            }

            if (letter === 'del') {
                handleDel()
                return
            }

            updateGuessedWords(letter);
        };  
    }


});