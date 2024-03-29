console.log("Welcome to Ayan's Tic Tac Toe game")
let Music = new Audio("../Extra/music.mp3")
let AudioTurn = new Audio("../Extra/ting.mp3")
let Gameover = new Audio("../Extra/gameover.mp3")
let Turn = "X"
let Isgameover = false;

//Function to change turn
const ChangeTurn = () => {
    return Turn === "X" ? "0" : "X"
}


//Game win logic
const CheckWin = () => {
    let boxtext = document.getElementsByClassName('grid');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('#turn').innerText = boxtext[e[0]].innerText + " Won. Game Over"
            Isgameover = true
            document.querySelector('#img').getElementsByTagName('img')[0].style.display = "block";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}


//Game logic
//Music.play()
let Boxes = document.getElementsByClassName("box");
Array.from(Boxes).forEach(element => {
    let boxtext = element.querySelector('.grid');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = Turn;
            Turn = ChangeTurn();
            AudioTurn.play();
            CheckWin();
            if (!Isgameover) {
                document.getElementById("turn").innerText = "Turn for " + Turn;
            }
        }
    })
})


// Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.grid');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementById("turn").innerText = "Turn for " + turn;
    document.querySelector('#img').getElementsByTagName('img')[0].style.display = "none"
})