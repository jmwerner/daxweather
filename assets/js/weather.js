
$(function ()
{
	$.get("https://ipinfo.io", function(response)
	{
		var location = response.city + "," + response.country;
		$.get("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=9de0b2c1e86e5e8c392cd24fc34f1607", function(data)
		{
			var description = data.weather[0].description;
			var icon = "assets/img/" + data.weather[0].icon + ".jpg";
            var face_picture = "assets/img/dax/" + data.weather[0].icon + ".png";
			var celcius = Math.round(data.main.temp - 273.15);
			var fahrenheit = Math.round(celcius * 9/5 + 32);
			var city_name = data.name;
			var wind_speed = data.wind.speed;

			$("#current_conditions").text(description);
            $("#header").css("background-image", "url(" + icon + ")");        
			$("#temperature").text(fahrenheit);
			$("#speed").text(wind_speed);
			$("#city").text(city_name);
            $("#face_picture").attr("src", face_picture);
            $("#animated_weather_svg").attr("data", "assets/svg/" + data.weather[0].icon + ".svg");

            $('.wind_vector').each(function() {
                var deg = data.wind.deg;
                var rotate = 'rotate(' + deg + 'deg)';
                $(this).css({ 
                    '-webkit-transform': rotate,
                    '-moz-transform': rotate,
                    '-o-transform': rotate,
                    '-ms-transform': rotate,
                    'transform': rotate 
                });
            });
            $("object param[name=flashvars]").attr("value", $("object").attr("data"));
		});

	}, "jsonp");
});

// Non-mobile dropdown menu
$(document).ready(function(){
    $('.city_selection').on('click', function(){

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

            $("#current_conditions").text(description);
            $("#header").css("background-image", "url(" + icon + ")");
            $("#temperature").text(fahrenheit);
            $("#speed").text(wind_speed);
            $("#city").text(city_name);
            $("#face_picture").attr("src", face_picture);

            $("#animated_weather_svg").replaceWith('<object id=\"animated_weather_svg\" type=\"image/svg+xml\" data=\"assets/svg/' + data.weather[0].icon + '.svg\" width=325 height=325></object>');

            $('.wind_vector').each(function() {
                var deg = data.wind.deg;
                var rotate = 'rotate(' + deg + 'deg)';
                $(this).css({ 
                    '-webkit-transform': rotate,
                    '-moz-transform': rotate,
                    '-o-transform': rotate,
                    '-ms-transform': rotate,
                    'transform': rotate 
                });
            });
        });
    });
});

// Mobile dropdown menu
$(document).ready(function(){
    $('.link.depth-1').on('click', function(){
        var cityMap = {};
        cityMap['<span class="indent-1"></span>Sioux Falls'] = '5231851';
        cityMap['<span class="indent-1"></span>New London'] = '4400423';
        cityMap['<span class="indent-1"></span>Menlo Park'] = '5372223';
        cityMap['<span class="indent-1"></span>Papillion'] = '5074792';
        cityMap['<span class="indent-1"></span>Houston'] = '4699066';
        cityMap['<span class="indent-1"></span>Aberdeen'] = '5225857';

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

            $("#current_conditions").text(description);
            $("#header").css("background-image", "url(" + icon + ")");
            $("#temperature").text(fahrenheit);
            $("#speed").text(wind_speed);
            $("#city").text(city_name);
            $("#face_picture").attr("src", face_picture);

            $("#animated_weather_svg").replaceWith('<object id=\"animated_weather_svg\" type=\"image/svg+xml\" data=\"assets/svg/' + data.weather[0].icon + '.svg\" width=325 height=325></object>');

            $('.wind_vector').each(function() {
                var deg = data.wind.deg;
                var rotate = 'rotate(' + deg + 'deg)';
                $(this).css({ 
                    '-webkit-transform': rotate,
                    '-moz-transform': rotate,
                    '-o-transform': rotate,
                    '-ms-transform': rotate,
                    'transform': rotate 
                });
            });
            $("object param[name=flashvars]").attr("value", $("object").attr("data"));
        });
        // Hide nav panel
        $(document.body).removeClass('navPanel-visible')
    });
});

