function getClima() {
    $.ajax({
        method: 'get',
        crossDomain: true,
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3468879&appid=\n\
0bc4d938d35fd364527f7251708bd21e&lang=pt_br',
        dataType: 'json',
        
        success: function (data) {
            console.log(data.weather[0].description);
            
              let conveterCelsius = (data.main.temp - 273.15);
            celsius = (Math.round(conveterCelsius)+'C°');

            $('#temperatura').html(celsius);
            $('#umidade').html(data.main.humidity+'%');
            $('#condicao').html(data.weather[0].description);
            $('#vento').html(data.wind.speed+'km/h');
            $('#nascer').html(data.sys.sunrise + ' h');
            $('#por').html(data.sys.sunset + ' h');
           
            let icone = 'img/'+data.weather[0].icon+'.png';
            $('#iconeCondicao').attr('src',icone)
        },
        error: function (argument) {
            alert('Falha ao obter dados!');
        }
    });
}
window.onload = function () {

    getClima();

};


