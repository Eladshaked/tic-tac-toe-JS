let player_turn = "X"
let table = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
]
let turns_number = 0
let player_X = 0
let player_O = 0
gameover = false

setInterval(timer, 1000);
document.getElementById("player_turn").innerHTML = player_turn;
document.getElementById("X-score").innerHTML = player_X;
document.getElementById("O-score").innerHTML = player_O;

// Canceling the instruction screen
function start(){
    document.getElementById("instructions").style.visibility = "hidden"
}

function white(){
    document.getElementById("body").style.background = "white"
    for (let i = 1; i < 10; i++) {
        document.getElementById(i).style.background = "white";
    }
}
function purple(){
    document.getElementById("body").style.background = "rgb(98, 135, 255)"
    for (let i = 1; i < 10; i++) {
        document.getElementById(i).style.background = "rgb(98, 135, 255)";
    }
}

// function of each move.
// Also checking the status of the board.
function turn(id){
    let square_text = document.getElementById(id).textContent
    if(square_text != "O" && square_text != "X"){
        socends = 30
        if (player_turn == "X"){
            document.getElementById(id).innerHTML = "X";
            table[id-1] = player_turn
            check_table(player_turn)
            player_turn = "O"
        }
        else{
            document.getElementById(id).innerHTML = "O";
            table[id-1] = player_turn
            check_table(player_turn)
            player_turn = "X"
        }
        turns_number += 1
        socends = 29
    document.getElementById("player_turn").innerHTML = player_turn;
    }
}


// A timer, checking if the time is up
function timer(){
    console.log(socends);
    if (socends < 30 && gameover == false) {
        document.getElementById("timer").innerHTML = "00:" + socends;
        socends --   
    }
    if(socends < 0){
        if (player_turn == "X") {
            player_turn = "O"
        }
        else{
            player_turn = "X"
        }
        socends
        game_over(player_turn)
    }
}

// Scanning the board, if there is a win or a draw, it ends the game.
function check_table(player_turn){
    if (table[0] == table[1] && table[0] == table[2]){
        game_over(player_turn)
    }

    else if (table[3] == table[4] && table[3] == table[5]){
        game_over(player_turn)
    }

    else if (table[6] == table[7] && table[6] == table[8]){
        game_over(player_turn)
    }

    else if (table[0] == table[3] && table[0] == table[6]){
        game_over(player_turn)
    }

    else if (table[1] == table[4] && table[1] == table[7]){
        game_over(player_turn)
    }

    else if (table[2] == table[5] && table[2] == table[8]){
        game_over(player_turn)
    }

    else if (table[0] == table[4] && table[0] == table[8]){
        game_over(player_turn)
    }

    else if (table[2] == table[4] && table[2] == table[6]){
        game_over(player_turn)
    }

    else if (turns_number == 8){
        game_over("no one")
    }
}

// The display of the end of the game, and a message about the winner
function game_over(player_turn){
    document.getElementById("end-screen").style.visibility = "visible"
    document.getElementById("hwo-win").textContent = player_turn
    gameover = true
    socends = 31

    if (player_turn == "X") { 
        player_X ++
        document.getElementById("X-score").innerHTML = player_X;
    }
    else if (player_turn == "O"){
        player_O ++
        document.getElementById("O-score").innerHTML = player_O;
    }
}


// The game reset button
function restart(){
    document.getElementById("end-screen").style.visibility = "hidden"
    player_turn = "X"
    table = [
        0, 1, 2,
        3, 4, 5,
        6, 7, 8
    ]
    turns_number = 0
    socends = 30
    gameover = false
    for (let i = 1; i < table.length + 1; i++) {
        document.getElementById(i).innerHTML = "";
    }
}