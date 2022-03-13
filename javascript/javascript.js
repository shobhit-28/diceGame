document.querySelector(".clickMe").addEventListener("click", function () {
    var random1 = (Math.floor(Math.random() * 6) + 1);
    if (random1 == 1) {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    }
    else if (random1 == 2) {
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    }
    else if (random1 == 3) {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    }
    else if (random1 == 4) {
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    }
    else if (random1 == 5) {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    }
    else if (random1 == 6) {
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    }
    var random2 = (Math.floor(Math.random() * 6) + 1);
    if (random2 == 1) {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    }
    else if (random2 == 2) {
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    }
    else if (random2 == 3) {
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    }
    else if (random2 == 4) {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    }
    else if (random2 == 5) {
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    }
    else if (random2 == 6) {
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    }
    if (random1 > random2) {
        document.querySelector("h1").innerText = "Player 1 wins";
    }
    else if (random1 < random2) {
        document.querySelector("h1").innerText = "Player 2 wins";
    }
    else {
        document.querySelector("h1").innerText = "Its a draw";
    }

})

document.addEventListener("keydown", function (event) {
    diceChanger(event.key);
})
function diceChanger(keyy) {
    if (keyy == "Enter") {
        var random1 = (Math.floor(Math.random() * 6) + 1);
        if (random1 == 1) {
            document.querySelector(".img1").setAttribute("src", "images/dice1.png");
        }
        else if (random1 == 2) {
            document.querySelector(".img1").setAttribute("src", "images/dice2.png");
        }
        else if (random1 == 3) {
            document.querySelector(".img1").setAttribute("src", "images/dice3.png");
        }
        else if (random1 == 4) {
            document.querySelector(".img1").setAttribute("src", "images/dice4.png");
        }
        else if (random1 == 5) {
            document.querySelector(".img1").setAttribute("src", "images/dice5.png");
        }
        else if (random1 == 6) {
            document.querySelector(".img1").setAttribute("src", "images/dice6.png");
        }
        var random2 = (Math.floor(Math.random() * 6) + 1);
        if (random2 == 1) {
            document.querySelector(".img2").setAttribute("src", "images/dice1.png");
        }
        else if (random2 == 2) {
            document.querySelector(".img2").setAttribute("src", "images/dice2.png");
        }
        else if (random2 == 3) {
            document.querySelector(".img2").setAttribute("src", "images/dice3.png");
        }
        else if (random2 == 4) {
            document.querySelector(".img2").setAttribute("src", "images/dice4.png");
        }
        else if (random2 == 5) {
            document.querySelector(".img2").setAttribute("src", "images/dice5.png");
        }
        else if (random2 == 6) {
            document.querySelector(".img2").setAttribute("src", "images/dice6.png");
        }
        if (random1 > random2) {
            document.querySelector("h1").innerText = "Player 1 wins";
        }
        else if (random1 < random2) {
            document.querySelector("h1").innerText = "Player 2 wins";
        }
        else {
            document.querySelector("h1").innerText = "Its a draw";
        }
    }
}


document.querySelector(".reset").addEventListener("click", function () {
    document.querySelector(".img1").setAttribute("src", "images/dice_initiator.png");
    document.querySelector(".img2").setAttribute("src", "images/dice_initiator.png");
    document.querySelector("h1").innerText = "Dice Game";
})

document.addEventListener("keydown", function (event) {
    resett(event.key);
})
function resett(keyyy) {
    switch(keyyy){
        case 'r' : document.querySelector(".img1").setAttribute("src", "images/dice_initiator.png");
        document.querySelector(".img2").setAttribute("src", "images/dice_initiator.png");
        document.querySelector("h1").innerText = "Dice Game";
        break;
        case 'R' : document.querySelector(".img1").setAttribute("src", "images/dice_initiator.png");
        document.querySelector(".img2").setAttribute("src", "images/dice_initiator.png");
        document.querySelector("h1").innerText = "Dice Game";
        break;
    }
}