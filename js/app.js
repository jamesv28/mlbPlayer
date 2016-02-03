$('#findPlayer').on('click', function(e) {
    e.preventDefault();
    var playerStats1 = $('#playerName1').val();
    var playerStats2 = $('#playerName2').val();
    for(var i = 0; i < players.length; i++) {
        if(playerStats1 === players[i].full_name) {
            $('#playerContent1').html('');
            var playerContent = document.getElementById('playerContent1');

            var fullName = document.createElement('h1');

            playerContent.appendChild(fullName);
            fullName.innerHTML = players[i].full_name;
            //var playerNameId = 'playerFullName';
            var position = document.createElement('h4');

            playerContent.appendChild(position);
            generalInfo(position,i);
            getStats(i);
            var avgHr = parseInt(currentHr/3);
            var avgRbi = parseInt(currentRbi/3);
            var avgObp = Math.round(+currentObp/3 * 100);
            //console.log(avgHr,avgRbi,avgObp);

            avghr1 = document.createElement('p');
            playerContent.appendChild(avghr1);
            avghr1.innerHTML = '<strong> Avergae Home Runs: </strong>' + avgHr;
            var avgRbi1 = document.createElement('p');
            playerContent.appendChild(avgRbi1);
            avgRbi1.innerHTML = '<strong> Average RBI: </strong>' + avgRbi;
            var avgObp1 = document.createElement('p');
            playerContent.appendChild(avgObp1);
            avgObp1.innerHTML = '<strong>Avg. On Base %: </strong>' + avgObp;
        }
        else if(playerStats2 === players[i].full_name) {
            $('#playerContent2').html('');
            var fullName2 = document.createElement('h1');
            var playerContent2 = document.getElementById('playerContent2');
            playerContent2.appendChild(fullName2);
            fullName2.innerHTML = players[i].full_name;
            var position2 = document.createElement('h4');
            playerContent2.appendChild(position2);
            generalInfo(position2,i);
            getStats(i);

        } else {
            console.log("this isn't working")
        }
    }
});

        /**
         * players:
         * Pablo sandoval
         * salvador perez
         * mike trout
         * kolten wong
         * Nolan Arenado
         * mathew Carpenter
         */

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