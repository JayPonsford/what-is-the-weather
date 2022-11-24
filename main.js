//Grab weather JSON from weatherapi using city input
async function grabWeather() {
  let locationValue = document.getElementById("search-bar").value;  
  try {
    const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=849ac5e0397e441c902142946222211&q=${locationValue}`
  );
  const data = await response.json()
  updateFields(data);
    } catch {
      document.getElementById('search-bar').value="";
      document.getElementById('search-bar').placeholder='Invalid city, please try again';
      document.getElementById('weather-loading').style.display="none";
    }
}

//Update data on page from JSON data
function updateFields(apiData) {  
    document.getElementById('search-bar').placeholder='Enter another city :)';
    document.getElementById('weather-loading').style.display="block";
    document.getElementById('location-city').textContent = `Weather in ${apiData.location.name}`
    document.getElementById('temperature-degrees').textContent = `The temperature is currently ${apiData.current.temp_c} degrees`
    document.getElementById('weather-description').textContent = `The weather is ${apiData.current.condition.text}`
    document.getElementById('humidity').textContent = `Humidity: ${apiData.current.humidity}`
    document.getElementById('wind').textContent = `Wind: ${apiData.current.wind_mph}mph`
    document.getElementById('weather-icon').src = `${apiData.current.condition.icon}`
}

//Future use, dynamic background depending on weather code returned
function backgroundUpdate() {
  document.body.style.backgroundImage = "url('')";
}