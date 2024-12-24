function search(){
    var country = document.getElementById("country").value;

    var url = `https://restcountries.com/v3.1/name/${country}`;

    fetch(url).then(response => response.json()).then(data => displayCountry(data));
}
function displayCountry(data){
    var oldContent = document.getElementById("displayCountry");
    oldContent.textContent = "";

    for(var i = 0; i< data.length;i++){
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `Country Name: ${data[i].name.common} <br>
        Official Country Name: ${data[i].name.official} <br>
        Capital City: ${data[i].capital}
        <br>
        Population: ${data[i].population}
         <br>
        Flag <br>
        <img src = "${data[i].flags.png}">
        <br>
        <button class="btn btn-info" onclick = "more('${data[i].name.common}')">More</button>`;
        oldContent.appendChild(newDiv);
    }

}

function more(data){
    var url = `http://api.weatherapi.com/v1/current.json?key=09390724b17442729dc35320240312&q=${data}&aqi=no`;
    fetch(url).then(res => res.json()).then(data => displayMore(data));
}

function displayMore(data){
    var weather = data;
    var oldContent = document.getElementById("displayMore");
    var newDiv = document.createElement("div");
    oldContent.innerHTML = `Local Time : ${weather.location.localtime} <br> 
    Weather Condition : ${weather.current.condition.text}
    <img src = "${weather.current.condition.icon}">`;
    oldContent.appendChild(newDiv);
    newDiv.classList.add("new");
}