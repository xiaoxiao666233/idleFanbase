// Read the member from URL: ?member=miyeon
const params = new URLSearchParams(window.location.search);
const memberKey = params.get("member"); // e.g., "miyeon"

// Define all members
const membersData = {
    miyeon: {
        title: "Miyeon",
        photos: ["Photo/Member/Miyeon/Miyeon01.jpg", "Photo/Member/Miyeon/Miyeon02.jpg", "Photo/Member/Miyeon/Miyeon03.jpg"],
        info: {
            fullname: "Miyeon",
            birthdate: "1997-01-31",
            position: "Main Vocal",
            nationality: "Korea"
        },
        songs: [
            {
                name: "You And No One Else",
                album: "MIYEON MY,Lover",
                role: "Lyrics",
                year: 2025,
                link: "https://music.youtube.com/watch?v=XG-CFHe-qy0&si=Pf3MmftgkKvsb1bq"
            },
            {
                name: "F.F.L.Y",
                album: "MIYEON MY,Lover",
                role: "Lyrics",
                year: 2025,
                link: "https://music.youtube.com/watch?v=7w-w7WYTs6I&si=CYQ2wsIX4vYXgtrQ"
            },
            {
                name: "Unstoppable",
                album: "I-DLE We Are",
                role: "Lyrics & Composition",
                year: 2025,
                link: "https://music.youtube.com/watch?v=tG8-iN9WC4c&si=n4w_H53DIEm9OJJ6"
            },
            {
                name: "Sky Walking",
                album: "MIYEON",
                role: "Lyrics & Composition",
                year: 2024,
                link: "https://music.youtube.com/watch?v=CWoFsfhn8-4&si=ZS8rng2lz8nqTfF8"
            },
            {
                name: "Neverland",
                album: "I-DLE I SWAY",
                role: "Lyrics",
                year: 2024,
                link: "https://music.youtube.com/watch?v=t0Dox99MAIc&si=CrT3m2e6x9nmu_w8"
            },
            {
                name: "Vision",
                album: "I-DLE (2)",
                role: "Lyrics",
                year: 2024,
                link: "https://music.youtube.com/watch?v=9gQodxTRl2k&si=SdZML48bo6lEO_6Y"
            },
            {
                name: "Rain (소나기)",
                album: "MIYEON MY",
                role: "Lyrics",
                year: 2022,
                link: "https://music.youtube.com/watch?v=9gQodxTRl2k&si=SdZML48bo6lEO_6Y"
            },

        ]
    },
    minnie: {
        title: "Minnie",
        photos: ["Photo/Member/Minnie/Minnie01.jpg", "Photo/Member/Minnie/Minnie02.jpg", "Photo/Member/Minnie/Minnie03.jpg"],
        info: {
            fullname: "Minnie",
            birthdate: "1997-11-23",
            position: "Main Vocal / Rapper",
            nationality: "Thailand"
        },
        songs: [
            {
                name: "Chain",
                album: "I-DLE We Are",
                role: "Composition",
                year: 2025,
                link: "https://music.youtube.com/watch?v=Y9T7Rm9dXxc&si=DtFv-dgDQG6qReGZ"
            },
            {
                name: "Obsession",
                album: "MINNIE HER",
                role: "Lyrics & Composition",
                year: 2025,
                link: "https://music.youtube.com/watch?v=aAw01FtfFuQ&si=-aEGN2WvzE9FQueC"
            },
            {
                name: "It’s Okay (익숙해)",
                album: "MINNIE HER",
                role: "Lyrics & Composition",
                year: 2025,
                link: "https://music.youtube.com/watch?v=LBzZWSjFWTQ&si=kfR6O7QpO1dLMSh2"
            },
            {
                name: "Valentine’s Dream",
                album: "MINNIE HER",
                role: "Lyrics & Composition",
                year: 2025,
                link: "https://music.youtube.com/watch?v=1XD2RrFVSfY&si=Iq08WdA2spP4edyJ"
            },
            {
                name: "Cherry Sky",
                album: "MINNIE HER",
                role: "Lyrics & Composition",
                year: 2025,
                link: "https://music.youtube.com/watch?v=vt8c-3VEt-I&si=5uQv2n0VLWr_YEsR"
            },
            {
                name: "Drive U Crazy",
                album: "MINNIE HER",
                role: "Lyrics",
                year: 2025,
                link: "https://music.youtube.com/watch?v=hjox2LOILR4&si=qy_k3zghQJ6oJoct"
            },
            {
                name: "HER",
                album: "MINNIE HER",
                role: "Lyrics & Composition",
                year: 2025,
                link: "https://music.youtube.com/watch?v=-DKQ4NBbyo4&si=08JG3fzMSu_QjXc6"
            },
            {
                name: "Blind Eyes Red",
                album: "MINNIE HER",
                role: "Lyrics",
                year: 2025,
                link: "https://music.youtube.com/watch?v=2GWl_bSqPWg&si=xUm6WtPx0jzqep7n"
            },
            {
                name: "Bloom",
                album: "I-DLE I SWAY",
                role: "Lyrics & Composition",
                year: 2024,
                link: "https://music.youtube.com/watch?v=QKhpMrixFco&si=cOJ6AUMNn6m9kI77"
            },
            {
                name: "7Days",
                album: "I-DLE (2)",
                role: "Lyrics & Composition",
                year: 2024,
                link: "https://music.youtube.com/watch?v=xk9-O-NmIJo&si=aDKwQHUZzGXoIZ-f"
            },
            {
                name: "Vision",
                album: "I-DLE (2)",
                role: "Lyrics & Composition",
                year: 2024,
                link: "https://music.youtube.com/watch?v=zMQ9Mufkwb0&si=3LJfcS2e9_f_2xiE"
            },
            {
                name: "Paradise",
                album: "I-DLE I Feel",
                role: "Lyrics & Composition",
                year: 2023,
                link: "https://music.youtube.com/watch?v=PCbx5U-S5ec&si=1S64galQPdsOsTU5"
            },
            {
                name: "Lucid",
                album: "I-DLE I Feel",
                role: "Lyrics & Composition",
                year: 2023,
                link: "https://music.youtube.com/watch?v=Bd5950W2b5E&si=Mwg4Meb5uGnMHruv"
            },
            {
                name: "Sculpture",
                album: "I-DLE I Love",
                role: "Lyrics & Composition",
                year: 2022,
                link: "https://music.youtube.com/watch?v=BqUinMr1_yQ&si=DxjUi0bzfzpxE-nY"
            },
            {
                name: "Change",
                album: "I-DLE I Love",
                role: "Lyrics & Composition",
                year: 2022,
                link: "https://music.youtube.com/watch?v=omgmCiMjNug&si=fusdUdEqpQV_CWLT"
            },
            {
                name: "Escape",
                album: "I-DLE I NEVER DIE",
                role: "Lyrics & Composition",
                year: 2022,
                link: "https://music.youtube.com/watch?v=7UQ7AVKsYvc&si=gi_t-z3SXCyGMzfr"
            },
            {
                name: "Already",
                album: "I-DLE I NEVER DIE",
                role: "Lyrics & Composition & Arrangement",
                year: 2022,
                link: "https://music.youtube.com/watch?v=_2iwrMT2r5s&si=Sj5rNnL3JUpCuKLV"
            },
            {
                name: "Dahlia",
                album: "I-DLE I Burn",
                role: "Lyrics & Composition",
                year: 2021,
                link: "https://music.youtube.com/watch?v=T3cVg1FSnwQ&si=jjEX9qZyalimYYAl"
            },
            {
                name: "Moon",
                album: "I-DLE I Burn",
                role: "Composition & Arrangement",
                year: 2021,
                link: "https://music.youtube.com/watch?v=OYtjo3CTAOM&si=KzobgmILA1T56qAN"
            },
            {
                name: "Tung-Tung (Empty)",
                album: "I-DLE Oh My God (JP)",
                role: "Lyrics & Composition & Arrangement",
                year: 2020,
                link: "https://music.youtube.com/watch?v=TKpzx1E3ywI&si=QqtoAjgfiDmSdYle"
            },
            {
                name: "I’M THE TREND",
                album: "I-DLE I’M THE TREND",
                role: "Lyrics & Composition",
                year: 2020,
                link: "https://music.youtube.com/watch?v=mBLy9FO88uY&si=DfMs5je7pnGpMx84"
            },
            {
                name: "Empire",
                album: "MINNIE & WENGIE",
                role: "Lyrics",
                year: 2019,
                link: "https://music.youtube.com/watch?v=siLW4UVw4hA&si=SJI42MHvPVoNji8m"
            },
            {
                name: "Blow Your Mind",
                album: "I-DLE I MADE",
                role: "Lyrics & Composition & Arrangement",
                year: 2019,
                link: "https://music.youtube.com/watch?v=XG-CFHe-qy0&si=Pf3MmftgkKvsb1bq"
            },
        ]
    },
    soyeon: {
        title: "Soyeon",
        photos: ["Photo/Member/Soyeon/Soyeon01.jpg", "Photo/Member/Soyeon/Soyeon02.jpg", "Photo/Member/Soyeon/Soyeon03.jpg"],
        info: {
            fullname: "Soyeon",
            birthdate: "1997-01-31",
            position: "Main Vocal",
            nationality: "Korea"
        },
        songs: [
            { name: "Song 1", role: "Lyrics", year: 2023, link: "song1.html" },
            { name: "Song 2", role: "Composition", year: 2022, link: "song2.html" }
        ]
    },
    yuqi: {
        title: "Yuqi",
        photos: ["Photo/Member/Yuqi/Yuqi01.jpg", "Photo/Member/Yuqi/Yuqi02.jpg", "Photo/Member/Yuqi/Yuqi03.jpg"],
        info: {
            fullname: "Yuqi",
            birthdate: "1997-01-31",
            position: "Main Vocal",
            nationality: "China"
        },
        songs: [
            { name: "Song 1", role: "Lyrics", year: 2023, link: "song1.html" },
            { name: "Song 2", role: "Composition", year: 2022, link: "song2.html" }
        ]
    },
    shuhua: {
        title: "Shuhua",
        photos: ["Photo/Member/Shuhua/Shuhua01.jpg", "Photo/Member/Shuhua/Shuhua02.jpg", "Photo/Member/Shuhua/Shuhua03.jpg"],
        info: {
            fullname: "Shuhua",
            birthdate: "1997-01-31",
            position: "Main Vocal",
            nationality: "China"
        },
        songs: [
            { name: "Song 1", role: "Lyrics", year: 2023, link: "song1.html" },
            { name: "Song 2", role: "Composition", year: 2022, link: "song2.html" }
        ]
    }
    // Add other members here...
};

// Get the member data
const data = membersData[memberKey] || membersData["miyeon"]; // fallback to Miyeon
document.title = "IdleFanbase - " + data.title;

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
data.songs.forEach((song, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>
            ${index + 1}. 
            <a href="${song.link}">
                ${song.name}
            </a> 
            <span class="album-name">— ${song.album}</span>
        </td>
        <td>${song.role}</td>
        <td>${song.year}</td>
    `;

    tbody.appendChild(tr);
});


