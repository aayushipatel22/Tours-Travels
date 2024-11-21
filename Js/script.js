const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

// const colors = ["#0000ff", "#ff4500", "#3cb371", "#dc143c", "#8a2be2"];
const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];
let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});



// const apiKey = 'YOUR_API_KEY';
// const baseUrl = 'https://api.opentripmap.com/0.1/en/places/';

// // Function to fetch data from the API
// function fetchTourismPlaces(location) {
//   const apiUrl = `${baseUrl}bbox?lon_min=${location.longitude - 1}&lat_min=${location.latitude - 1}&lon_max=${location.longitude + 1}&lat_max=${location.latitude + 1}&format=json&apikey=${apiKey}`;

//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       // Process the retrieved data and display it on your webpage
//       console.log(data);
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
// }

// // Example usage
// const location = {
//   latitude: 40.7128, // Example latitude
//   longitude: -74.0060 // Example longitude
// };

// fetchTourismPlaces(location);
