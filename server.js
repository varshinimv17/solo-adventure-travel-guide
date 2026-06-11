const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

const destinations = [
  {
    name: "Goa",
    budget: "₹15,000",
    activities: [
      "Scuba Diving",
      "Parasailing",
      "Beach Camping"
    ]
  },
  {
    name: "Manali",
    budget: "₹18,000",
    activities: [
      "Trekking",
      "River Rafting",
      "Camping"
    ]
  },
  {
    name: "Coorg",
    budget: "₹12,000",
    activities: [
      "Coffee Plantation Tour",
      "Hiking",
      "Waterfalls"
    ]
  },
  {
    name: "Ladakh",
    budget: "₹25,000",
    activities: [
      "Bike Trip",
      "Camping",
      "Mountain Adventure"
    ]
  }
];

app.get("/api/destinations", (req, res) => {
  res.json(destinations);
});

app.post("/api/itinerary", (req, res) => {

  const { destination, days } = req.body;

  const itinerary = {
    destination,
    days,
    plan: [
      `Day 1: Arrival at ${destination}`,
      "Day 2: Adventure Activities",
      "Day 3: Local Exploration",
      "Budget: ₹15,000 - ₹20,000",
      "Safety: Keep emergency contacts"
    ]
  };

  res.json(itinerary);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});