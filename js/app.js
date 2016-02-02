$('#findPlayer').on('click', function(e) {
    e.preventDefault();
    var playerStats1 = $('#playerName1').val();
    var playerStats2 = $('#playerName2').val();
    var players = obj.playerInfo;
    for(var i = 0; i < players.length; i++) {
        if(playerStats1 === players[i].full_name) {
            $('#playerContent1').html('');
            var string = '';
            var fullName = document.createElement('h1');
            var playerContent = document.getElementById('playerContent1');

            playerContent.appendChild(fullName);
            fullName.innerHTML = players[i].full_name;
            //var playerNameId = 'playerFullName';
            var position = document.createElement('h4');

            playerContent.appendChild(position);
            position.innerHTML = '#' + players[i].jersey_number + ' | ' + '<strong>Position: </strong> ' + players[i].position
                   + ' | ' + '<strong> Throws: </strong>' + players[i].throw_hand
                    + ' | ' + '<strong> Bats: </strong>' + players[i].bat_hand + ' | ' + players[i].team.market + ' ' + players[i].team.name ;

            console.log('waka waka', players[i].seasons[0].teams[0].statistics.hitting);
            console.log('seasons', players[i].seasons);

            //for(var j = 0; j < players[i].seasons[j].teams[0].length; j++) {
            //    console.log('hello',players[i].seasons[j].teams[0]);
            //}
        }
        else if(playerStats2 === players[i].full_name) {
            $('#playerContent2').html('');
            var fullName2 = document.createElement('h1');
            var playerContent2 = document.getElementById('playerContent2');
            playerContent2.appendChild(fullName2);
            fullName2.innerHTML = players[i].full_name;
            var position2 = document.createElement('jh4');
            playerContent2.appendChild(position2);
            position2.innerHTML = '#' + players[i].jersey_number + ' | ' + '<strong>Position: </strong> ' + players[i].position
                + ' | ' + '<strong> Throws: </strong>' + players[i].throw_hand
                + ' | ' + '<strong> Bats: </strong>' + players[i].bat_hand + ' | ' + players[i].team.market + ' ' + players[i].team.name ;


        } else {
            console.log("this isn't working")
        }
    }
});

function play() {
    var audio = document.getElementById('audio');
    audio.play();
}
    $(document).ready(function () {

        //console.log(obj.playerInfo);






        /**
         * players:
         * Pablo sandoval
         * salvador perez
         * mike trout
         * kolten wong
         * Nolan Arenado
         * mathew Carpenter
         */
}); //end of jQuery script

//var birthPlace = document.createElement('p');
//playerContent.appendChild(birthPlace);
//birthPlace.innerHTML = "<strong> Birthplace: </strong>" + players[i].birthcity + ', ' + players[i].birthstate
//    + ', ' + players[i].birthcountry;
//var college = document.createElement('p');
//playerContent.appendChild(college);
//college.innerHTML = "<strong>College: </strong>" + players[i].college;
//var heightWeight = document.createElement('p');
//playerContent.appendChild(heightWeight);
//heightWeight.innerHTML = "<strong>Ht/Wt: </strong> " + players[i].height + ', ' + players[i].weight + 'lbs.';