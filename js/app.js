$(document).ready(function () {

    var settings = {
         "async": true,
         "crossDomain": true,
        "url": 'https://api.sportradar.us/mlb-t5/league/full_rosters.json?api_key=p3tgpnbk5tujzqkpenczuwtm',
        "method": "GET",
        "dataType": 'jsonp'
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    //$.ajax({
    //    method: 'GET',
    //    url: 'https://api.sportradar.us/mlb-t5/league/full_rosters.json?api_key=p3tgpnbk5tujzqkpenczuwtm',
    //    dataType: 'json',
    //    //crossDomain: true,
    //    success: function(data) {
    //        /**
    //         * fidn the plaer id by going through the data object
    //         * in rosters > players to see if the input matches a player
    //         * and then make another ajax request to go into players/ players id stats
    //         */
    //
    //    }
    //})
}); //end of jQuery script
