// Načtení závodů
async function loadRaces() {
  const response = await fetch("https://ergast.com/api/f1/2025.json");
  const data = await response.json();
  const races = data.MRData.RaceTable.Races;

  const container = document.getElementById("race-list");
  container.innerHTML = "";

  races.forEach(race => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${race.raceName}</h3>
      <p><strong>Kolo:</strong> ${race.round}</p>
      <p><strong>Datum:</strong> ${race.date}</p>
      <p><strong>Místo:</strong> ${race.Circuit.Location.locality}, ${race.Circuit.Location.country}</p>
    `;

    container.appendChild(card);
  });
}

// Načtení průběžného pořadí jezdců
async function loadStandings() {
  const response = await fetch("https://ergast.com/api/f1/2025/driverStandings.json");
  const data = await response.json();
  const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

  const tableBody = document.querySelector("#standings-table tbody");
  tableBody.innerHTML = "";

  standings.forEach(driver => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${driver.position}</td>
      <td>${driver.Driver.givenName} ${driver.Driver.familyName}</td>
      <td>${driver.Constructors[0].name}</td>
      <td>${driver.points}</td>
    `;
    tableBody.appendChild(row);
  });
}
