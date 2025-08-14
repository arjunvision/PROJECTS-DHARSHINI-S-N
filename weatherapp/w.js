// w.js

const apiKey = "a4816a455fc746f64699c0ddf5bc6cb6"; // Replace with your real API key

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    document.getElementById("weatherResult").innerHTML = 
      `<p style="color:red;">Please enter a city name</p>`;
    return;
  }

const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;


  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const result = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>☁️ Weather: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
      `;
      document.getElementById("weatherResult").innerHTML = result;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = 
        `<p style="color:red;">${error.message}</p>`;
    });
}
