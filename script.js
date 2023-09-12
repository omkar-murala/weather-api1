const apiKey = '10f3974bbcc351bfd324195590d27424'; // Replace with your actual OpenWeatherMap API key
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                locationElement.textContent = `Location: ${data.name}, ${data.sys.country}`;
                temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
                descriptionElement.textContent = `Description: ${data.weather[0].description}`;
            })
            .catch(error => console.error('Error fetching data:', error));
    }
});
