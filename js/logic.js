var currentHr = 0;
var currentRbi = 0;
var currentObp = 0;
var players = obj.playerInfo;


//function create(content, id, name, elem) {
//    content = document.getElementById('id');
//    name = document.createElement('elem');
//}

function play() {
    var audio = document.getElementById('audio');
    audio.play();
}
function generalInfo(elem, index) {
    elem.innerHTML = '#' + players[index].jersey_number + ' | ' + '<strong>Position: </strong> ' + players[index].position
        + ' | ' + '<strong> Throws: </strong>' + players[index].throw_hand
        + ' | ' + '<strong> Bats: </strong>' + players[index].bat_hand + ' | ' + players[index].team.market + ' ' + players[index].team.name ;
}
function getStats(index) {
    for (var p = 0; p < players[index].seasons.length; p++) {
        currentHr = players[index].seasons[p].teams[0].statistics.hitting.onbase.hr + currentHr;
        currentRbi = players[index].seasons[p].teams[0].statistics.hitting.rbi + currentRbi;
        currentObp = players[index].seasons[p].teams[0].statistics.hitting.obp + currentObp;
    }
}

