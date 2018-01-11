
$(function ()
{
    $.ajax({
        url: "https://ipinfo.io",
        type: "GET",
        dataType: "json",
        /**
         * A function to be called if the request fails. 
         */
        error: function(jqXHR, textStatus, errorThrown) {
            $.get("https://api.openweathermap.org/data/2.5/weather?id=5231851&appid=9de0b2c1e86e5e8c392cd24fc34f1607", function(data)
            {
                var description = data.weather[0].description;
                var icon = "assets/img/" + data.weather[0].icon + ".jpg";
                var face_picture = "assets/img/dax/" + data.weather[0].icon + ".png";
                var celcius = Math.round(data.main.temp - 273.15);
                var fahrenheit = Math.round(celcius * 9/5 + 32);
                var city_name = data.name;
                var wind_speed = data.wind.speed;

                $("#vegas_sign").attr("width", 0).attr("height", 0);
                if(city_name == 'Las Vegas'){
                    $("#vegas_sign").attr("width", 200).attr("height", 200);
                }

                $("#current_conditions").text(description);
                $("#header").css("background-image", "url(" + icon + ")");
                $("#temperature").text(fahrenheit);
                $("#speed").text(wind_speed);
                $("#city").text(city_name);
                $("#face_picture").attr("src", face_picture);

                $("#animated_weather_svg").replaceWith('<object id=\"animated_weather_svg\" type=\"image/svg+xml\" data=\"assets/svg/' + data.weather[0].icon + '.svg\" width=325 height=325></object>');
            });
        },

        /**
         * A function to be called if the request succeeds.
         */
        success: function(response, textStatus, jqXHR) {
            var lat_lon = response.loc.split(',');
            $.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat_lon[0] + "&lon=" + lat_lon[1] + "&appid=9de0b2c1e86e5e8c392cd24fc34f1607", function(data)
            {
                var description = data.weather[0].description;
                var icon = "assets/img/" + data.weather[0].icon + ".jpg";
                var face_picture = "assets/img/dax/" + data.weather[0].icon + ".png";
                var celcius = Math.round(data.main.temp - 273.15);
                var fahrenheit = Math.round(celcius * 9/5 + 32);
                var city_name = data.name;
                var wind_speed = data.wind.speed;

                $("#vegas_sign").attr("width", 0).attr("height", 0);
                if(city_name == 'Las Vegas'){
                    $("#vegas_sign").attr("width", 200).attr("height", 200);
                }

                $("#current_conditions").text(description);
                $("#header").css("background-image", "url(" + icon + ")");        
                $("#temperature").text(fahrenheit);
                $("#speed").text(wind_speed);
                $("#city").text(city_name);
                $("#face_picture").attr("src", face_picture);
                $("#animated_weather_svg").replaceWith('<object id=\"animated_weather_svg\" type=\"image/svg+xml\" data=\"assets/svg/' + data.weather[0].icon + '.svg\" width=325 height=325></object>');
            });
        }
    });
});

// Non-mobile dropdown menu
$(document).ready(function(){
    $('.city_selection').bind('click touchstart', function(){

        var location_id = $(this).attr('value');

        $.get("https://api.openweathermap.org/data/2.5/weather?id=" + location_id + "&appid=9de0b2c1e86e5e8c392cd24fc34f1607", function(data)
        {
            var description = data.weather[0].description;
            var icon = "assets/img/" + data.weather[0].icon + ".jpg";
            var face_picture = "assets/img/dax/" + data.weather[0].icon + ".png";
            var celcius = Math.round(data.main.temp - 273.15);
            var fahrenheit = Math.round(celcius * 9/5 + 32);
            var city_name = data.name;
            var wind_speed = data.wind.speed;

            $("#vegas_sign").attr("width", 0).attr("height", 0);
            if(city_name == 'Las Vegas'){
                $("#vegas_sign").attr("width", 200).attr("height", 200);
            }

            $("#current_conditions").text(description);
            $("#header").css("background-image", "url(" + icon + ")");
            $("#temperature").text(fahrenheit);
            $("#speed").text(wind_speed);
            $("#city").text(city_name);
            $("#face_picture").attr("src", face_picture);

            $("#animated_weather_svg").replaceWith('<object id=\"animated_weather_svg\" type=\"image/svg+xml\" data=\"assets/svg/' + data.weather[0].icon + '.svg\" width=325 height=325></object>');
        });
    });
});

// Mobile dropdown menu
$(document).ready(function(){
    $('.link.depth-1').on('click', function(){
        var cityMap = {};
        cityMap['<span class="indent-1"></span>Sioux Falls'] = '5231851';
        cityMap['<span class="indent-1"></span>New London'] = '5039111';
        cityMap['<span class="indent-1"></span>Menlo Park'] = '5372223';
        cityMap['<span class="indent-1"></span>Papillion'] = '5074792';
        cityMap['<span class="indent-1"></span>Houston'] = '4699066';
        cityMap['<span class="indent-1"></span>Aberdeen'] = '5225857';
        cityMap['<span class="indent-1"></span>Stillwater'] = '5048814';

        var location_id = cityMap[this.innerHTML];

        $.get("https://api.openweathermap.org/data/2.5/weather?id=" + location_id + "&appid=9de0b2c1e86e5e8c392cd24fc34f1607", function(data)
        {
            var description = data.weather[0].description;
            var icon = "assets/img/" + data.weather[0].icon + ".jpg";
            var face_picture = "assets/img/dax/" + data.weather[0].icon + ".png";
            var celcius = Math.round(data.main.temp - 273.15);
            var fahrenheit = Math.round(celcius * 9/5 + 32);
            var city_name = data.name;
            var wind_speed = data.wind.speed;

            $("#vegas_sign").attr("width", 0).attr("height", 0);
            if(city_name == 'Las Vegas'){
                $("#vegas_sign").attr("width", 200).attr("height", 200);
            }

            $("#current_conditions").text(description);
            $("#header").css("background-image", "url(" + icon + ")");
            $("#temperature").text(fahrenheit);
            $("#speed").text(wind_speed);
            $("#city").text(city_name);
            $("#face_picture").attr("src", face_picture);

            $("#animated_weather_svg").replaceWith('<object id=\"animated_weather_svg\" type=\"image/svg+xml\" data=\"assets/svg/' + data.weather[0].icon + '.svg\" width=325 height=325></object>');
        });
        // Hide nav panel
        $(document.body).removeClass('navPanel-visible')
    });
});




