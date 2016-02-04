$('#findPlayer').on('click', function(e) {
    e.preventDefault();
    var avgHr = 0;
    var avgRbi = 0;
    var avgObp = 0;
    var batAvg = 0;

    var avgHr2 = 0;
    var avgRbi2 = 0;
    var avgObp2 = 0;
    var batAvg2 = 0;

    var playerStats1 = $('#playerName1').val();

    for (var i = 0; i < players.length; i++) {

        if (playerStats1 === players[i].full_name) {

            $('#playerContent1').html('');

            var playerContent = document.getElementById('playerContent1');
            var fullName = document.createElement('h1');
            playerContent.appendChild(fullName);

            fullName.innerHTML = players[i].full_name;
            var position = document.createElement('h5');
            playerContent.appendChild(position);

            generalInfo(position, i);
            whoHeIs(playerContent, i);
            getStats(i);

            avgHr = parseInt(currentHr / players[i].seasons.length);
            avgRbi = parseInt(currentRbi / players[i].seasons.length);
            avgObp = +currentObp / players[i].seasons.length;
            avgObp = avgObp.toFixed(3);
            batAvg = currentBatAvg / players[i].seasons.length;
            batAvg = batAvg.toFixed(3);

            var batAvg1 = document.createElement('p');
            playerContent.appendChild(batAvg1);

            var batAvgplayer1 = batAvg;
            batAvg1.innerHTML = "<strong>Career Bat Avg. </strong>" + batAvgplayer1;
            avghr1 = document.createElement('p');
            playerContent.appendChild(avghr1);

            var player1avghr1 = avgHr;
            avghr1.innerHTML = '<strong> Average Home Runs: </strong>' + avgHr;
            var avgRbi1 = document.createElement('p');
            playerContent.appendChild(avgRbi1);
            avgRbi1.innerHTML = '<strong> Average RBI: </strong>' + avgRbi;

            var avgObp1 = document.createElement('p');
            playerContent.appendChild(avgObp1);
            avgObp1.innerHTML = '<strong>Avg. On Base %: </strong>' + avgObp;
        }
    }











for (var i = 0; i < players.length; i++) {
    var playerStats2 = $('#playerName2').val();

    if (playerStats2 === players[i].full_name) {
        $('#playerContent2').html('');

        var fullName2 = document.createElement('h1');
        var playerContent2 = document.getElementById('playerContent2');
        playerContent2.appendChild(fullName2);

        fullName2.innerHTML = players[i].full_name;
        var position2 = document.createElement('h5');
        playerContent2.appendChild(position2);

        generalInfo(position2, i);
        whoHeIs(playerContent2, i);
        avgHr2 = parseInt(currentHr / players[i].seasons.length);
        avgRbi2 = parseInt(currentRbi / players[i].seasons.length);
        avgObp2 = +currentObp / players[i].seasons.length;
        avgObp2 = avgObp2.toFixed(3);
        batAvg2 = currentBatAvg / players[i].seasons.length;
        batAvg2 = batAvg2.toFixed(3);

        batAvg2El = document.createElement('p');
        playerContent2.appendChild(batAvg2El);
        batAvg2El.innerHTML = "<strong>Career Bat Avg. </strong>" + batAvg2;

        avghr2El = document.createElement('p');
        playerContent2.appendChild(avghr2El);
        avghr2El.innerHTML = '<strong> Average Home Runs: </strong>' + avgHr2;

        var avgRbi2El = document.createElement('p');
        playerContent2.appendChild(avgRbi2El);
        avgRbi2El.innerHTML = '<strong> Average RBI: </strong>' + avgRbi2;

        var avgObp2El = document.createElement('p');
        playerContent2.appendChild(avgObp2El);
        avgObp2El.innerHTML = '<strong>Avg. On Base %: </strong>' + avgObp2;

        //rankTheStats(batAvgplayer1,batAvgplayer2,batAvg1,batAvg2);

        //rankTheStats(player1avghr1, player1avghr2, avghr1, avghr2);
        //rankTheStats(playe1avgRb1, playe1avgRb2,avgRbi1 ,avgRbi2);
        //if(batAvgplayer1 > batAvgplayer2) {
        //    batAvgplayer1.addClass('text-success');
        //} else {
        //    batAvg2.className = ('text-success';
        //}
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