// Need to figure out how to get the image of text to change with temperature

$(function ()
{
	$.get("http://ipinfo.io", function(response)
	{

		var location = response.city + "," + response.country;

		$.get("http://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=9de0b2c1e86e5e8c392cd24fc34f1607", function(data)
		{
			var description = data.weather[0].description;
			var icon = "static/img/" + data.weather[0].icon + ".jpg";
			var weathertext = "static/words/" + data.weather[0].icon + ".png";
			var celcius = Math.round(data.main.temp - 273.15);
			var fahrenheit = Math.round(celcius * 9/5 + 32);

			$("h2").text(description);
			$("body").css( "backgroundImage", "url(" + icon + ")");
			$("body").css( ".weathertext", "url(" + weathertext + ")");
			$("#f").text(fahrenheit);
			$("#c").text(celcius);

			var doge_img = "url(./img/words/" + data.weather[0].icon + ".png)";


		});

	}, "jsonp");
});
