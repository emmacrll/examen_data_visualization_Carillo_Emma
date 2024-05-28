fetch('data.json')
.then((response) => response.json())
.then((data) => run_visualization(data));

function run_visualization(data) {
sortByCountryPopulation(data);
const countries = data.slice(0, 30);
const countryNames = countries.map(country => country.country);
const countryPopulations = countries.map(country => country.population);

const plotData = [{
    x: countryNames,
    y: countryPopulations,
    type: 'bar'
}];

Plotly.newPlot('data-viz', plotData);
}

function sortByCountryPopulation(data) {
data.sort((a, b) => a.population - b.population);
}