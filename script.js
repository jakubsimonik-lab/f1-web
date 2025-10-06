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
function loadQualifying() {
  const qualifying = [
    { pos: 1, num: 4, driver: "Lando Norris", team: "McLaren-Mercedes", Q1: "1:15.912", Q2: "1:15.415", Q3: "1:15.096", start: 1 },
    { pos: 2, num: 81, driver: "Oscar Piastri", team: "McLaren-Mercedes", Q1: "1:16.062", Q2: "1:15.468", Q3: "1:15.180", start: 2 },
    { pos: 3, num: 1, driver: "Max Verstappen", team: "Red Bull Racing-Honda RBPT", Q1: "1:16.018", Q2: "1:15.565", Q3: "1:15.481", start: 3 },
    { pos: 4, num: 63, driver: "George Russell", team: "Mercedes", Q1: "1:15.971", Q2: "1:15.789", Q3: "1:15.546", start: 4 },
    { pos: 5, num: 22, driver: "Yuki Tsunoda", team: "Racing Bulls-Honda RBPT", Q1: "1:16.225", Q2: "1:16.009", Q3: "1:15.670", start: 5 },
    { pos: 6, num: 23, driver: "Alexander Albon", team: "Williams-Mercedes", Q1: "1:16.245", Q2: "1:16.017", Q3: "1:15.737", start: 6 },
    { pos: 7, num: 16, driver: "Charles Leclerc", team: "Ferrari", Q1: "1:16.029", Q2: "1:15.827", Q3: "1:15.755", start: 7 },
    { pos: 8, num: 44, driver: "Lewis Hamilton", team: "Ferrari", Q1: "1:16.213", Q2: "1:15.919", Q3: "1:15.973", start: 8 },
    { pos: 9, num: 10, driver: "Pierre Gasly", team: "Alpine-Renault", Q1: "1:16.328", Q2: "1:16.112", Q3: "1:15.980", start: 9 },
    { pos: 10, num: 55, driver: "Carlos Sainz Jr.", team: "Williams-Mercedes", Q1: "1:16.360", Q2: "1:15.931", Q3: "1:16.062", start: 10 }
  ];

  const tbody = document.querySelector("#qualifying-table tbody");
  tbody.innerHTML = "";

  qualifying.forEach(q => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${q.pos}</td>
      <td>${q.num}</td>
      <td>${q.driver}</td>
      <td>${q.team}</td>
      <td>${q.Q1}</td>
      <td>${q.Q2}</td>
      <td>${q.Q3}</td>
      <td>${q.start}</td>
    `;
    tbody.appendChild(row);
  });
}
 
