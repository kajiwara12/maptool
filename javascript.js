console.log("helo");
var map = L.map("map").setView([21.4789, -158.0001], 9);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var brewMap = L.map("brewMap").setView([21.3, -157.8568], 16);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(brewMap);
var marker = L.marker([21.3009, -157.8568]).addTo(brewMap);
marker.bindPopup("<b>Aloha Beer Co</b>").openPopup();
var marker2 = L.marker([21.2992, -157.85599]).addTo(brewMap);
marker2.bindPopup("<b>Waikiki Brewing Kaka'ako</b>");
var marker3 = L.marker([21.2971, -157.8604]).addTo(brewMap);
marker3.bindPopup("<b>Honolulu Beerworks</b>");

var foodMap = L.map("foodMap").setView([21.295, -157.83], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(foodMap);
var marker4 = L.marker([21.301768185953282, -157.85374318094904]).addTo(
  foodMap
);
marker4.bindPopup("<b>Yanagi Sushi</b>").openPopup();
var marker5 = L.marker([21.27515993350951, -157.81540510641977]).addTo(foodMap);
marker5.bindPopup("<b>Tonkatsu Tamafuji</b>");
var marker6 = L.marker([21.294467921843513, -157.8520047199104]).addTo(foodMap);
marker6.bindPopup("<b>Istanbul Hawaii</b>");
var marker7 = L.marker([21.282576120585432, -157.7984908910748]).addTo(foodMap);
marker7.bindPopup("<b>Noods Ramen Bar</b>");

// var shopMap = L.map("shopMap").setView([21.4789, -158.0001], 9);
// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 19,
//   attribution:
//     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// }).addTo(shopMap);
