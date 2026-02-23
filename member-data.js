// Read the member from URL: ?member=miyeon
const params = new URLSearchParams(window.location.search);
const memberKey = params.get("member"); // e.g., "miyeon"

// Define all members
const membersData = {
    miyeon: {
        title: "Miyeon",
        photos: ["Photo/Group/miyeon1.jpg", "Photo/Group/miyeon2.jpg"],
        info: {
            fullname: "Miyeon",
            birthdate: "1997-01-31",
            position: "Main Vocal",
            nationality: "Korea"
        },
        songs: [
            { name: "Song 1", role: "Lyrics", year: 2023, link: "song1.html" },
            { name: "Song 2", role: "Composition", year: 2022, link: "song2.html" }
        ]
    },
    minnie: {
        title: "Minnie",
        photos: ["Photo/Group/minnie1.jpg"],
        info: {
            fullname: "Minnie",
            birthdate: "1997-11-23",
            position: "Main Vocal / Rapper",
            nationality: "Thailand"
        },
        songs: [
            { name: "Song A", role: "Lyrics", year: 2022, link: "songA.html" }
        ]
    }
    // Add other members here...
};

// Get the member data
const data = membersData[memberKey] || membersData["miyeon"]; // fallback to Miyeon

// Fill Title
document.querySelector(".member-title").textContent = data.title;

// Fill Personal Info
document.getElementById("fullname").textContent = data.info.fullname;
document.getElementById("birthdate").textContent = data.info.birthdate;
document.getElementById("position").textContent = data.info.position;
document.getElementById("nationality").textContent = data.info.nationality;

// Fill Carousel
const carouselInner = document.querySelector(".carousel-inner");
carouselInner.innerHTML = "";
data.photos.forEach((photo, index) => {
    const div = document.createElement("div");
    div.className = "carousel-item" + (index === 0 ? " active" : "");
    div.innerHTML = `<img src="${photo}" class="d-block w-100" alt="Member Photo ${index + 1}">`;
    carouselInner.appendChild(div);
});

// Fill Song Credits
const tbody = document.querySelector(".song-credits tbody");
tbody.innerHTML = "";
data.songs.forEach(song => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td><a href="${song.link}">${song.name}</a></td>
        <td>${song.role}</td>
        <td>${song.year}</td>
    `;
    tbody.appendChild(tr);
});
