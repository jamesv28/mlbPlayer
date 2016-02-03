var currentHr = 0, currentRbi = 0, currentObp = 0;
var currentBatAvg = 0, currentSlug = 0, currentFpct = 0;
var currentErrprs = 0;

var players = obj.playerInfo;

function play() {
    var audio = document.getElementById('audio');
    audio.play();
}
function generalInfo(elem, index) {
    elem.innerHTML = '#' + players[index].jersey_number + ' | ' + '<strong>Position: </strong> ' + players[index].position
        + ' | ' + '<strong> Throws: </strong>' + players[index].throw_hand
        + ' | ' + '<strong> Bats: </strong>' + players[index].bat_hand + ' | ' + players[index].team.market + ' ' + players[index].team.name ;
}

function whoHeIs(content, index) {
    var birthPlace = document.createElement('p');
    content.appendChild(birthPlace);
    birthPlace.innerHTML = "<strong> Birthplace: </strong>" + players[index].birthcity + ', ' + players[index].birthstate
        + ', ' + players[index].birthcountry;
    var college = document.createElement('p');
    content.appendChild(college);
    college.innerHTML = "<strong>College: </strong>" + players[index].college;
    var heightWeight = document.createElement('p');
    content.appendChild(heightWeight);
    heightWeight.innerHTML = "<strong>Ht/Wt: </strong> " + players[index].height + ', ' + players[index].weight + 'lbs.';
}

function getStats(index) {
    for (var p = 0; p < players[index].seasons.length; p++) {
        currentHr = players[index].seasons[p].teams[0].statistics.hitting.onbase.hr + currentHr;
        currentRbi = players[index].seasons[p].teams[0].statistics.hitting.rbi + currentRbi;
        currentObp = players[index].seasons[p].teams[0].statistics.hitting.obp + currentObp;
        currentBatAvg = players[index].seasons[p].teams[0].statistics.hitting.avg + currentBatAvg;
        //currentFpct = players[index].seasons[p].teams[0].statistics.fielding.fpct + currentFpct;
        //console.log('wake up',players[0].seasons[0].teams[0]);
    }
}

