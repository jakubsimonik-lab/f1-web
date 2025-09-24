from fastf1 import get_event_schedule
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/calendar")
def calendar():
    schedule = get_event_schedule(2025, include_testing=False)
    races = []
    for _, race in schedule.iterrows():
        races.append({
            "name": race["EventName"],
            "round": int(race["RoundNumber"]),
            "date": str(race["EventDate"].date()),
            "location": race["Location"],
            "country": race["Country"]
        })
    return jsonify(races)

@app.route("/api/drivers")
def drivers():
    # Zatím demo – body nejsou dostupné přímo (muselo by se spočítat z výsledků závodů)
    drivers = [
        {"position": 1, "name": "Max Verstappen", "team": "Red Bull", "points": 0},
        {"position": 2, "name": "Charles Leclerc", "team": "Ferrari", "points": 0},
        {"position": 3, "name": "Lewis Hamilton", "team": "Mercedes", "points": 0},
    ]
    return jsonify(drivers)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
