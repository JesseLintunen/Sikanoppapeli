const players = [];

let x = prompt('How many players are playing?');

for (let i=0; i<x; i++){
    let player = { name: "", points: 0 }
    player.name = prompt("Give player "+ (i*1+1) + "'s name");
    players.push(player);
}

let turn = 0;
let roundScore = 0;

function rollDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal;

    die1.innerHTML = d1;
    die2.innerHTML = d2;
    
    if(d1 == d2){
        if (d1 == 1){
            diceTotal = 25;
        } else {
            diceTotal = (d1 + d2)*2;
        }
    } else if (d1 == 1 || d2 == 1) {
        diceTotal = 0;


    } else {
        diceTotal = d1 + d2;

    }
         
    // status.innerHTML += " DOUBLES! ";
    
    roundScore += diceTotal;
    status.innerHTML = `You rolled ${diceTotal}. <br>Roundscore: ${roundScore}`;
    if (diceTotal == 0){
        changeTurn()
    }

}

function changeTurn(){
    players[turn].points += roundScore;
    roundScore= 0 ;
    turn++;
    if (turn >=players.length) {
        turn = 0;
    }
    updateStats()
}

function updateStats(){
    let html = '';
    for(let i=0; i<players.length; i++){
        html += players[i].name + ' points : ' + players[i].points + '<br>'
    }
    document.getElementById('game-stats').innerHTML = html;

    // Tulosta kenen vuoro

    document.getElementById("now-turn").innerHTML=players[turn].name

    }
    
   

function endRound() {
    players[turn].points = score;
    turn++;
    if (turn >=players.length) {
        turn = 0;
    }
    score = 0;
}

function printScore() {
    let html = "";
    for(let i in players){
        let x = Number(i)+1;
        html += `Player ${x}: ${players[i].name}  points: ${players[i].points} <br>`;
    }
    document.getElementById('players').innerHTML = html;
}


