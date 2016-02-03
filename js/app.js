$('#findPlayer').on('click', function(e) {
    e.preventDefault();
    var avgHr = 0;
    var avgRbi = 0;
    var avgObp = 0;
    var batAvg = 0;
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
            var position = document.createElement('h5');

            playerContent.appendChild(position);
            generalInfo(position,i);
            whoHeIs(playerContent,i);
            getStats(i);
             avgHr = parseInt(currentHr/ players[i].seasons.length);
             avgRbi = parseInt(currentRbi/3);
             avgObp = +currentObp/3;
            avgObp = avgObp.toFixed(3);
             batAvg = currentBatAvg/3 ;
            batAvg = batAvg.toFixed(3);
            //console.log(avgHr,avgRbi,avgObp);

            var batAvg1 = document.createElement('p');
            playerContent.appendChild(batAvg1);
            batAvg1.innerHTML = "<strong>Career Bat Avg. </strong>" + batAvg;
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
            var position2 = document.createElement('h5');
            playerContent2.appendChild(position2);
            generalInfo(position2,i);
            whoHeIs(playerContent2,i);
            getStats(i);
             avgHr = parseInt(currentHr/3);
             avgRbi = parseInt(currentRbi/3);
            avgObp = +currentObp/3;
            avgObp = avgObp.toFixed(3);
            batAvg = currentBatAvg/4 ;
            batAvg = batAvg.toFixed(3);

            batAvg2 = document.createElement('p');
            playerContent2.appendChild(batAvg2);
            batAvg2.innerHTML = "<strong>Career Bat Avg. </strong>" + batAvg;
            avghr2 = document.createElement('p');
            playerContent2.appendChild(avghr2);
            avghr2.innerHTML = '<strong> Avergae Home Runs: </strong>' + avgHr;
            var avgRbi2 = document.createElement('p');
            playerContent2.appendChild(avgRbi2);
            avgRbi2.innerHTML = '<strong> Average RBI: </strong>' + avgRbi;
            var avgObp2 = document.createElement('p');
            playerContent2.appendChild(avgObp2);
            avgObp2.innerHTML = '<strong>Avg. On Base %: </strong>' + avgObp;

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

