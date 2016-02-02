$('#findPlayer').on('click', function(e) {
    e.preventDefault();
    var playerStats = $('#playerName').val();
    var players = obj.playerInfo;
    for(var i = 0; i < players.length; i++) {
        if(playerStats === players[i].full_name) {
            $('#playerContent').html('');
            var string = '';
            var fullName = document.createElement('h1');
            var playerContent = document.getElementById('playerContent');
            playerContent.appendChild(fullName);
            fullName.innerHTML = players[i].full_name;
            var playerNameId = 'playerFullName';
            fullName.setAttribute("id", playerNameId);
            var position = document.createElement('h4');
            playerContent.appendChild(position);
            position.innerHTML = '#' + players[i].jersey_number + ' | ' + '<strong>Position: </strong> ' + players[i].position
                   + ' | ' + '<strong> Throws: </strong>' + players[i].throw_hand
                    + ' | ' + '<strong> Bats: </strong>' + players[i].bat_hand + ' | ' + players[i].team.market + ' ' + players[i].team.name ;
            var birthPlace = document.createElement('p');
            playerContent.appendChild(birthPlace);
            birthPlace.innerHTML = "<strong> Birthplace: </strong>" + players[i].birthcity + ', ' + players[i].birthstate
                + ', ' + players[i].birthcountry;
            var college = document.createElement('p');
            playerContent.appendChild(college);
            college.innerHTML = "<strong>College: </strong>" + players[i].college;
            var heightWeight = document.createElement('p');
            playerContent.appendChild(heightWeight);
            heightWeight.innerHTML = "<strong>Ht/Wt: </strong> " + players[i].height + ', ' + players[i].weight + 'lbs.';
        }
    }
});

function play() {
    var audio = document.getElementById('audio');
    audio.play();
}
    $(document).ready(function () {

        console.log(obj.playerInfo);






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
