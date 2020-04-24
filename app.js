var country = document.getElementById("countryName");
var confirmedCases = document.getElementById("TotalConfirmed");
var totalDeath = document.getElementById("TotalDeaths");
var totalRecover = document.getElementById("TotalRecoverd");
var NewlyConfirmed = document.getElementById("NewConfirmed");

var request = new XMLHttpRequest();
request.open("GET", "https://api.covid19api.com/summary", true);

request.onload = function () {
  var CountryData = JSON.parse(request.responseText)
  countryName = CountryData.Countries[''];

  for (i in CountryData.Countries) {
    countryName = CountryData.Countries[i].Country;
    totalConfirmed = CountryData.Countries[i].TotalConfirmed;
    totalDeaths = CountryData.Countries[i].TotalDeaths;
    totalRecovered = CountryData.Countries[i].TotalRecovered;
    newConfirmed = CountryData.Countries[i].NewConfirmed;

    // Create Div for every element
    var node = document.createElement("DIV");
    var node2 = document.createElement("DIV");
    var node3 = document.createElement("DIV");
    var node4 = document.createElement("DIV");
    var node5 = document.createElement("DIV");

    // Create TextNode for every element
    var textnode = document.createTextNode(countryName);
    var confirm = document.createTextNode(totalConfirmed)
    var deaths = document.createTextNode(totalDeaths)
    var recovered = document.createTextNode(totalRecovered)
    var newConfirm = document.createTextNode(newConfirmed)

    // append Your data in create element
    node.append(textnode)
    node2.append(confirm)
    node3.append(deaths)
    node4.append(recovered)
    node5.append(newConfirm)

    // Append Your data in HTML using Id
    country.appendChild(node);
    confirmedCases.appendChild(node2);
    totalDeath.appendChild(node3);
    totalRecover.appendChild(node4);
    NewlyConfirmed.appendChild(node5);

  }

};
request.send();