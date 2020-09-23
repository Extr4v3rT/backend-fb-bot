function runningBotAjax() {
    $.ajax({
        type:'GET',
        url: 'http://localhost:8080/ajaxcall',
        dataType: 'json'
    })
    .done(function(data) {
        console.log('Get response:', "Uruchomiono");
        $('#getResponse').html("Uruchomiono");
    })
    .fail(function(jqXHR, textStatus, err) {
        console.log('AJAX error response:',textStatus);
    });
}