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

async function loadStandings() {
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
async function loadStandings() {
  const drivers = [
    { position: 1, name: "Oscar Piastri", team: "McLaren", points: 324 },
    { position: 2, name: "Lando Norris", team: "McLaren", points: 299 },
    { position: 3, name: "Max Verstappen", team: "Red Bull Racing", points: 255 },
    { position: 4, name: "George Russell", team: "Mercedes", points: 212 },
    { position: 5, name: "Charles Leclerc", team: "Ferrari", points: 165 },
    { position: 6, name: "Lewis Hamilton", team: "Ferrari", points: 121 },
    { position: 7, name: "Kimi Antonelli", team: "Mercedes", points: 78 },
    { position: 8, name: "Alexander Albon", team: "Williams", points: 70 },
    { position: 9, name: "Isack Hadjar", team: "Racing Bulls", points: 39 },
    { position: 10, name: "Nico Hulkenberg", team: "Kick Sauber", points: 37 },
    { position: 11, name: "Lance Stroll", team: "Aston Martin", points: 32 },
    { position: 12, name: "Carlos Sainz", team: "Williams", points: 31 },
    { position: 13, name: "Liam Lawson", team: "Racing Bulls", points: 30 },
    { position: 14, name: "Fernando Alonso", team: "Aston Martin", points: 30 },
    { position: 15, name: "Esteban Ocon", team: "Haas", points: 28 },
    { position: 16, name: "Pierre Gasly", team: "Alpine", points: 20 },
    { position: 17, name: "Yuki Tsunoda", team: "Red Bull Racing", points: 20 },
    { position: 18, name: "Gabriel Bortoleto", team: "Kick Sauber", points: 18 },
    { position: 19, name: "Oliver Bearman", team: "Haas", points: 16 },
    { position: 20, name: "Franco Colapinto", team: "Alpine", points: 0 }
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
