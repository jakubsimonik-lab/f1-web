const API_URL = "http://localhost:5000/api"; 
// Později: "https://moje-f1-api.onrender.com/api"

async function loadRaces() {
  const res = await fetch(`${API_URL}/calendar`);
  const races = await res.json();
  const container = document.getElementById("race-list");
  container.innerHTML = "";
  races.forEach(race => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${race.name}</h3>
      <p><strong>Kolo:</strong> ${race.round}</p>
      <p><strong>Datum:</strong> ${race.date}</p>
      <p><strong>Místo:</strong> ${race.location}, ${race.country}</p>
    `;
    container.appendChild(card);
  });
}
/**
async function loadStandingsFromAPI() {
  const res = await fetch(`${API_URL}/drivers`);
  const drivers = await res.json();
  const tbody = document.querySelector("#standings-table tbody");
  tbody.innerHTML = "";
  drivers.forEach(d => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${d.position}</td>
      <td>${d.name}</td>
      <td>${d.team}</td>
      <td>${d.points}</td>
    `;
    tbody.appendChild(row);
  });
}
*/
function loadStandingsHardcoded() {
  const drivers = [
    { position: 1, name: "Oscar Piastri", team: "McLaren", points: 324 },
    { position: 2, name: "Lando Norris", team: "McLaren", points: 299 },
    { position: 3, name: "Max Verstappen", team: "Red Bull Racing", points: 255 },
    { position: 4, name: "George Russell", team: "Mercedes", points: 212 },
    // ... další data
  ];

  const tbody = document.querySelector("#standings-table tbody");
  tbody.innerHTML = "";

  drivers.forEach(d => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${d.position}</td>
      <td>${d.name}</td>
      <td>${d.team}</td>
      <td>${d.points}</td>
    `;
    tbody.appendChild(row);
  });
}
