$('#findPlayer').on('click', function(e) {
    e.preventDefault();
    var playerStats = $('#playerName').val();
    for(var i = 0; i < obj.playerInfo.length; i++) {
        if(playerStats === obj.playerInfo[i].full_name) {
            $('#playerContent').html('');
            var string = '';
            var fullName = document.createElement('h2');
            var playerContent = document.getElementById('playerContent');
            playerContent.appendChild(fullName);
            fullName.innerHTML = obj.playerInfo[i].full_name;
            var position = document.createElement('p');
            playerContent.appendChild(position);
            position.innerHTML = '<strong>Position: </strong> ' + obj.playerInfo[i].position;
        }
    }
});
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
