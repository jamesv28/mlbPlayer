$(document).ready(function () {
    $.ajax({
        method: 'GET',
        url: 'https://api.sportradar.us/mlb-t5/league/full_rosters.json?api_key=p3tgpnbk5tujzqkpenczuwtm',
        dataType: 'json',
        success: function(data) {
            console.log(data);
        }
    })
}); //end of jQuery script
