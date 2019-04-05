let places = [];

const printToDom = (print) => {
    document.getElementById('placesDiv').innerHTML = print;
};

const domStringBuilder = (x) =>{
    let domString = '';
    places.forEach((x) => {
        domString += `<div class="card col-3">`;
        domString += `<h5 class="card-title"><b>${x.cityName}, ${x.countryName}</b></h5>`;
        domString += `<img src="${x.cityImage}" class="card-img-top" alt="...">`;
        domString += `<ul>`;
        domString += `<li>Favorite Restaurant: ${x.favoriteRestaurant}</li>`;
        domString += `<li>Favorite Restaurant: ${x.favoriteBar}</li>`
        domString += `<li>Favorite Restaurant: ${x.favoriteHotel}</li>`
        domString += `<li>Favorite Restaurant: ${x.favoriteTouristAttraction}</li>`
        domString += `</ul>`;
        domString += `</div>;`;
    })
    printToDom(domString);
};

function executeThisCodeAfterFileLoads(){
    const data = JSON.parse(this.responseText);
    places = data.places;
    domStringBuilder(data.places);
};

function executeThisCodeIfXHRFails(){
    console.error('oh shit');
};

const getPlacesData = () => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
    myRequest.addEventListener('error', executeThisCodeIfXHRFails);
    myRequest.open('GET', './db/places.json')
    myRequest.send();
};

const init = () => {
    getPlacesData();
};

init();