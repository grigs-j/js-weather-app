const API_KEY = "751808e9ca424bfe95a50231212812";

let long;
let lat;
const tempDesc = document.querySelector(".temp-desc");
const tempDegree = document.querySelector(".temp-degree");
const locationTimezone = document.querySelector(".location-timezone");
const icon = document.querySelector(".icon");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search");

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {
//         long = position.coords.longitude;
//         lat = position.coords.latitude;

fetch(
    "https://api.weatherapi.com/v1/current.json?key=751808e9ca424bfe95a50231212812&q=bend,oregon&aqi=yes"
)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        const { temp_f, temp_c } = data.current;
        const { text, icon } = data.current.condition;
        const { name, region } = data.location;
        tempDegree.textContent = temp_f;
        tempDesc.textContent = text;
        locationTimezone.textContent = `${name}, ${region}`;
    });

function setIcons() {}

// grabs input value
searchInput.addEventListener("keyup", () => {
    // disable btn if falsy username value
    searchBtn.disabled = !searchInput.value;
    const searchString = searchInput.value;

    search = (e) => {
        e.preventDefault();
        fetch(
            `https://api.weatherapi.com/v1/current.json?key=751808e9ca424bfe95a50231212812&q=${searchString}&aqi=yes`
        )
            .then((res) => res.json())
            .then((searchData) => {
                console.log(searchData);
                const { temp_f, temp_c } = searchData.current;
                const { text, icon } = searchData.current.condition;
                const { name, region } = searchData.location;
                tempDegree.textContent = temp_f;
                tempDesc.textContent = text;
                locationTimezone.textContent = `${name}, ${region}`;
            });
    };
});
