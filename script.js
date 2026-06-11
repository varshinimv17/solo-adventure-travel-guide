async function loadDestinations(){

const response =
await fetch("/api/destinations");

const data =
await response.json();

let html = "";

data.forEach(place => {

html += `
<div class="card">

<h3>${place.name}</h3>

<p>
Budget:
${place.budget}
</p>

<p>
Activities:
${place.activities.join(", ")}
</p>

</div>
`;
});

document.getElementById(
"destinationList"
).innerHTML = html;
}

async function generateItinerary(){

const destination =
document.getElementById(
"destination"
).value;

const days =
document.getElementById(
"days"
).value;

const response =
await fetch("/api/itinerary", {

method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:JSON.stringify({
destination,
days
})
});

const data =
await response.json();

let html = `
<h2>${data.destination}</h2>
`;

data.plan.forEach(day => {
html += `<p>${day}</p>`;
});

document.getElementById(
"result"
).innerHTML = html;
}