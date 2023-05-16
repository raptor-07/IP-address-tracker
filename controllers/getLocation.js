import { validator } from "../utils/validateIp.js";
import { renderInfoBar } from "../utils/clientRenderer.js";

let ip;

//add listener function to the button
document
  .getElementsByClassName("searchIp")[0]
  .childNodes[3].addEventListener("click", async function () {
    // //reinitialize map container if already initialized
    var container = L.DomUtil.get("map");
    if (container != null) {
      container._leaflet_id = null;
    }

    //get the ip from the input field
    ip = document.getElementsByClassName("searchIp")[0].childNodes[1].value;

    //validate the ip
    if (!validator(ip)) {
      alert("Invalid IP");
      return;
    }

    //send the ip to the geoLocation API to retrieve the location
    const apiKey = "at_aTvQZ947QB6P2hqWEssL1LAQu6OmP";
    const location = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`
    );
    const locationData = await location.json();

    //send the location data to the leaflet API
    const lat = locationData.location.lat;
    const lng = locationData.location.lng;
    const mymap = L.map("map");
    mymap.setView([lat, lng], 13);
    const attribution = `&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors`;
    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(mymap);
    const marker = L.marker([lat, lng]).addTo(mymap);

    //render the data on the info bar
    renderInfoBar(
      ip,
      locationData.location.city,
      locationData.location.timezone,
      locationData.isp
    );
  });

//reset everything on page reload
window.onload = function () {
  document.getElementsByClassName("searchIp")[0].childNodes[1].value = "";
};
