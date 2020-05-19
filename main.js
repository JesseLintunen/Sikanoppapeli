let x = prompt('How many players are playing?');
let players = [];
for (let i=0; i<x; i++){
    let player = { name: "", points: 0 }
    player.name = prompt("Give player "+ (i*1+1) + "'s name");
    players.push(player);
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
        html += Player ${x}: ${players[i].name}  points: ${players[i].points} <br>;
    }
    document.getElementById('players').innerHTML = html;
}