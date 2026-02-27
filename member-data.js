// Read the member from URL: ?member=miyeon
const params = new URLSearchParams(window.location.search);
const memberKey = params.get("member"); // e.g., "miyeon"

// Animate all fade-slide elements
window.addEventListener('load', () => {
    document.querySelectorAll('.fade-slide, .fade-slide-bottom, .fade-slide-left').forEach(el => {
        el.classList.add('show');
    });
});


// Define all members
const membersData = {
    miyeon: {
        title: "Miyeon",
        photos: ["Photo/Member/Miyeon/Miyeon01.jpg", "Photo/Member/Miyeon/Miyeon02.jpg", "Photo/Member/Miyeon/Miyeon03.jpg"],
        info: {
            fullname: "Cho Miyeon 조미연",
            birthdate: "1997-01-31",
            position: "Main Vocalist, Visual",
            nationality: "Korea",
            animalcolor: "🐰🐊 (Rabbit & Crocodile), Green",
            personality: "Gentle • Easygoing • Secretly Chaotic"
        },
        awards: [
            { title: "TIRTIR Popularity Star Award – Blue Dragon Series Awards", year: 2024 },
            { title: "1st Solo Music Show Win for “Drive” – The Show", year: 2022 }
        ],
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
            fullname: "Kim Minnie ณิชา ยนตรรักษ์ (Nicha Yontararak)",
            birthdate: "1997-10-23",
            position: "Main Vocalist",
            nationality: "Thailand",
            animalcolor: "🐭🐱 (Mouse & Cat), Blue",
            personality: "Dreamy • Artistic • Emotionally Deep"
        },
        awards: [
            { title: "1st Solo Music Show Win – Music Bank", year: 2025 },
            { title: "The Most Prime Solo Award – Hanteo Music Awards", year: 2024 }
        ],
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
            fullname: "Jeon Soyeon 전소연",
            birthdate: "1998-08-26",
            position: "Leader, Main Rapper, Sub-Vocalist, Center",
            nationality: "Korea",
            animalcolor: "🐯🦁 (Tiger & Lion), Red",
            personality: "Driven • Perfectionist • Charismatic"
        },
        awards: [
            { title: "Best Songwriter – Melon Music Awards", year: 2024 },
            { title: "Best Songwriter – Melon Music Awards", year: 2022 },
            { title: "Female Multi‑Entertainer of the Year – Brand of the Year Awards", year: 2022 },
            { title: "1st Solo Music Show Win – The Show", year: 2021 }
        ],
        songs: [
            {
                name: "MONO",
                album: "I-DLE MONO",
                role: "[icebluerabbit] Lyrics & Composition",
                year: 2025,
                link: "https://music.youtube.com/watch?v=7Hh9rm_9Aco&si=DnF_rTkaPFDPWMe-"
            },
            {
                name: "愛せなかった世界へ永遠にじゃあね - Farewell to the World",
                album: "I-DLE i-dle (JP)",
                role: "Lyrics",
                year: 2025,
                link: "https://music.youtube.com/watch?v=FlpiE5vpEzY&si=955xeNyOCitKCHVd"
            },
            {
                name: "どうしよっかな - Where Do We Go",
                album: "I-DLE i-dle (JP)",
                role: "Lyrics",
                year: 2025,
                link: "https://music.youtube.com/watch?v=8N7VN2kRGxc&si=pm99E29quhrVv79-"
            },
            {
                name: "Girlfriend",
                album: "I-DLE We Are",
                role: "Lyrics & Composition",
                year: 2025,
                link: "https://music.youtube.com/watch?v=gQMmFQWUSgE&si=VDIG9d7UpPwzzucY"
            },
            {
                name: "Good Thing",
                album: "I-DLE We Are",
                role: "Lyrics & Composition",
                year: 2025,
                link: "https://music.youtube.com/watch?v=b_lHhgt08yQ&si=URs9PSunZTe1GS0d"
            },
            {
                name: "Klaxon",
                album: "I-DLE I SWAY",
                role: "Lyrics & Composition",
                year: 2024,
                link: "https://music.youtube.com/watch?v=-hUX3-eXmUE&si=1KA_TrW8mxYgG-Mo"
            },
            {
                name: "Wife",
                album: "I-DLE (2)",
                role: "Lyrics & Composition",
                year: 2024,
                link: "https://music.youtube.com/watch?v=B0WWnKfat1A&si=xq5gpqnj137F-iYQ"
            },
            {
                name: "Fate (나는 아픈 건 딱 질색이니까)",
                album: "I-DLE (2)",
                role: "Lyrics & Composition",
                year: 2024,
                link: "https://music.youtube.com/watch?v=vBJVWOOsB4A&si=0xoXVhsISFq9UFbE"
            },
            {
                name: "Revenge",
                album: "I-DLE (2)",
                role: "Lyrics & Composition",
                year: 2024,
                link: "https://music.youtube.com/watch?v=J2XMe2bGx4Q&si=S4iPKu3ZhJIK6Pj0"
            },
            {
                name: "Super Lady",
                album: "I-DLE (2)",
                role: "Lyrics & Producer",
                year: 2024,
                link: "https://music.youtube.com/watch?v=DWP7XTudxcg&si=HpGpkDXU7HLIkDcA"
            },
            {
                name: "Peter Pan (어린 어른)",
                album: "I-DLE I FEEL",
                role: "Lyrics",
                year: 2023,
                link: "https://music.youtube.com/watch?v=ypsaGJzyAjg&si=oKvL9LhsEEASTlkh"
            },
            {
                name: "Allergy",
                album: "I-DLE I FEEL",
                role: "Lyrics & Composition & Arrangement",
                year: 2023,
                link: "https://music.youtube.com/watch?v=Gcp87-ZegRA&si=yE82Hz40Z-N7rHWr"
            },
            {
                name: "Queencard",
                album: "I-DLE I FEEL",
                role: "Lyrics & Composition & Arrangement",
                year: 2023,
                link: "https://music.youtube.com/watch?v=v_gO_P8gug8&si=k996HvopKpb2qQ0T"
            },
            {
                name: "DARK (X-file)",
                album: "I-DLE I LOVE",
                role: "Lyrics",
                year: 2022,
                link: "https://music.youtube.com/watch?v=uC6tdOZRKms&si=2LOZx4XxrnS0sKbf"
            },
            {
                name: "조각품 (Sculpture)",
                album: "I-DLE I LOVE",
                role: "Lyrics",
                year: 2022,
                link: "https://music.youtube.com/watch?v=BqUinMr1_yQ&si=2Kvt03zokfXaNGfy"
            },
            {
                name: "Reset",
                album: "I-DLE I LOVE",
                role: "Lyrics",
                year: 2022,
                link: "https://music.youtube.com/watch?v=2X6aKe3XKBs&si=Oa7Ytsgmfq9k19yo"
            },
            {
                name: "Change",
                album: "I-DLE I LOVE",
                role: "Lyrics",
                year: 2022,
                link: "https://music.youtube.com/watch?v=omgmCiMjNug&si=2QtD2WmjNgbijDDS"
            },
            {
                name: "LOVE",
                album: "I-DLE I LOVE",
                role: "Lyrics & Composition & Arrangement",
                year: 2022,
                link: "https://music.youtube.com/watch?v=SmuuDi5ZwOo&si=_w3I_JiYCh_cTFfi"
            },
            {
                name: "Nxde",
                album: "I-DLE I LOVE",
                role: "Lyrics & Composition & Arrangement",
                year: 2022,
                link: "https://music.youtube.com/watch?v=RdU3F5vN3_s&si=4KgXHWw5KkIuhpSA"
            },
            {
                name: "My Bag",
                album: "I-DLE I NEVER DIE",
                role: "Lyrics & Composition",
                year: 2022,
                link: "https://music.youtube.com/watch?v=KTNyZKgy1D0&si=RksFYWTf5l62CzUe"
            },
            {
                name: "LIAR",
                album: "I-DLE I NEVER DIE",
                role: "Lyrics",
                year: 2022,
                link: "https://music.youtube.com/watch?v=sGEWAOcbMZ0&si=XFkNrY4tGUXdDml_"
            },
            {
                name: "ESCAPE",
                album: "I-DLE I NEVER DIE",
                role: "Lyrics & Composition",
                year: 2022,
                link: "https://music.youtube.com/watch?v=7UQ7AVKsYvc&si=kWPWg42VgjRsclqH"
            },
            {
                name: "ALREADY",
                album: "I-DLE I NEVER DIE",
                role: "Lyrics & Composition",
                year: 2022,
                link: "https://music.youtube.com/watch?v=_2iwrMT2r5s&si=lMSgY3sTX4_pA11r"
            },
            {
                name: "VILLAIN DIES",
                album: "I-DLE I NEVER DIE",
                role: "Lyrics & Composition",
                year: 2022,
                link: "https://music.youtube.com/watch?v=jYkvghyX_mo&si=en5twWIOmttv4f3V"
            },
            {
                name: "말리지 마 (Never Stop Me)",
                album: "I-DLE I NEVER DIE",
                role: "Lyrics & Composition & Arrangement",
                year: 2022,
                link: "https://music.youtube.com/watch?v=S0HSe_Qk7ZQ&si=TigvIIlR3gEBN82e"
            },
            {
                name: "TOMBOY",
                album: "I-DLE I NEVER DIE",
                role: "Lyrics & Composition & Arrangement",
                year: 2022,
                link: "https://music.youtube.com/watch?v=aFoqCI75WoY&si=_CNllyuK2f5XFvVk"
            },
            {
                name: "Is this bad b**** number?",
                album: "SOYEON WINDY",
                role: "Lyrics & Composition",
                year: 2021,
                link: "https://music.youtube.com/watch?v=N8cmrP1AfaQ&si=G1FKJbhHGyZaK1tF"
            },
            {
                name: "Psycho",
                album: "SOYEON WINDY",
                role: "Lyrics & Composition",
                year: 2021,
                link: "https://music.youtube.com/watch?v=iF4mCjnSUoU&si=CC8bzP42wsHXmUHI"
            },
            {
                name: "Weather",
                album: "SOYEON WINDY",
                role: "Lyrics & Composition & Arrangement",
                year: 2021,
                link: "https://music.youtube.com/watch?v=BRRxM88Rgug&si=V9EUeLMuOoYdKoNl"
            },
            {
                name: "Quit",
                album: "SOYEON WINDY",
                role: "Lyrics & Composition & Arrangement",
                year: 2021,
                link: "https://music.youtube.com/watch?v=nTLbiqBAjbE&si=3o0PX16zx4fRhSBK"
            },
            {
                name: "BEAM BEAM",
                album: "SOYEON WINDY",
                role: "Lyrics & Composition & Arrangement",
                year: 2021,
                link: "https://music.youtube.com/watch?v=khgCIMs_lVQ&si=rxMUZX9w7DalUP-D"
            },
            {
                name: "HWAA (Chinese Ver.)",
                album: "I-DLE I Burn",
                role: "Lyrics & Composition & Arrangement",
                year: 2021,
                link: "https://music.youtube.com/watch?v=2DN9sZzIFrg&si=PbIBb3b4afv3kXTk"
            },
            {
                name: "LOST",
                album: "I-DLE I Burn",
                role: "Lyrics",
                year: 2021,
                link: "https://music.youtube.com/watch?v=ILmHLmZiVG0&si=GRvTDfhOrX-zEsBz"
            },
            {
                name: "Where is love",
                album: "I-DLE I Burn",
                role: "Lyrics & Composition",
                year: 2021,
                link: "https://music.youtube.com/watch?v=L4WnbelD60E&si=DcuyjSNvaJweN6PW"
            },
            {
                name: "DAHLIA",
                album: "I-DLE I Burn",
                role: "Lyrics",
                year: 2021,
                link: "https://music.youtube.com/watch?v=T3cVg1FSnwQ&si=ZJRIMw811xi7mzG8"
            },
            {
                name: "MOON",
                album: "I-DLE I Burn",
                role: "Lyrics",
                year: 2021,
                link: "https://music.youtube.com/watch?v=OYtjo3CTAOM&si=n7ikx9MrS2bEObkZ"
            },
            {
                name: "HANN (Alone in winter)",
                album: "I-DLE I Burn",
                role: "Lyrics & Composition & Arrangement",
                year: 2021,
                link: "https://music.youtube.com/watch?v=j8wmfKVktGI&si=MltcDzEaXx8ocAYH"
            },
            {
                name: "화 火花 HWAA",
                album: "I-DLE I Burn",
                role: "Lyrics & Composition & Arrangement",
                year: 2021,
                link: "https://music.youtube.com/watch?v=DOjxbtafGYk&si=W8j9N2UfhxvFUb7d"
            },
            {
                name: "Tung-Tung (Empty)",
                album: "I-DLE Oh My God (JP)",
                role: "Lyrics",
                year: 2020,
                link: "https://music.youtube.com/watch?v=TKpzx1E3ywI&si=NctmhjjfHXOIpRLF"
            },
            {
                name: "DUMDI DUMDI",
                album: "I-DLE DUMDI DUMDI",
                role: "Lyrics & Composition",
                year: 2020,
                link: "https://music.youtube.com/watch?v=IZwze68yHuM&si=arjxj_wADoD4HvmG"
            },
            {
                name: "I'M THE TREND",
                album: "I-DLE I'M THE TREND",
                role: "Lyrics",
                year: 2020,
                link: "https://music.youtube.com/watch?v=mBLy9FO88uY&si=tkZ58CAWIBifOPVk"
            },
            {
                name: "Oh My God English Ver",
                album: "I-DLE I Trust",
                role: "Lyrics & Composition & Arrangement",
                year: 2020,
                link: "https://music.youtube.com/watch?v=AdSQi7-xT8Y&si=On4J-vNbZ3y-TQpt"
            },
            {
                name: "Maybe",
                album: "I-DLE I Trust",
                role: "Lyrics & Composition",
                year: 2020,
                link: "https://music.youtube.com/watch?v=k8pEDdNUvzI&si=MgQK4VIBKpkRcU_v"
            },
            {
                name: "Luv U",
                album: "I-DLE I Trust",
                role: "Lyrics & Composition & Arrangement",
                year: 2020,
                link: "https://music.youtube.com/watch?v=MYVB3IlTIFs&si=nzoVAEDdESGiDjBA"
            },
            {
                name: "Oh My God",
                album: "I-DLE I Trust",
                role: "Lyrics & Composition & Arrangement",
                year: 2020,
                link: "https://music.youtube.com/watch?v=EuHL72riOn4&si=02HeCkEFVx67oOLB"
            },
            {
                name: "LION",
                album: "I-DLE Queendom & I Trust",
                role: "Lyrics & Composition & Arrangement",
                year: 2019,
                link: "https://music.youtube.com/watch?v=WP3Pnag40AI&si=K7sTjIGB8hiJN-Ws"
            },
            {
                name: "Uh-Oh",
                album: "I-DLE Uh-Oh",
                role: "Lyrics & Composition & Producer",
                year: 2019,
                link: "https://music.youtube.com/watch?v=NMYzKVLSlgc&si=SKVn3TLvfvLHIpGP"
            },
            {
                name: "What's Your Name",
                album: "I-DLE I Made",
                role: "Lyrics & Composition",
                year: 2019,
                link: "https://music.youtube.com/watch?v=v8zTRXCgF1Y&si=BFwZ7dmCgaFUJGxy"
            },
            {
                name: "주세요 (Give Me Your)",
                album: "I-DLE I Made",
                role: "Lyrics & Composition & Arrangement",
                year: 2019,
                link: "https://music.youtube.com/watch?v=HmUlhIjkPYE&si=iRjyRXROZCDMUboV"
            },
            {
                name: "Put It Straight",
                album: "I-DLE I Made",
                role: "Lyrics & Composition & Arrangement",
                year: 2019,
                link: "https://music.youtube.com/watch?v=MIAtuJ31l98&si=-LQNDtQt9dojuwBz"
            },
            {
                name: "Blow Your Mind",
                album: "I-DLE I Made",
                role: "Lyrics",
                year: 2019,
                link: "https://music.youtube.com/watch?v=Q8RQiYxsQGk&si=mmur4Q8OzwcxqzZL"
            },
            {
                name: "Senorita",
                album: "I-DLE I Made",
                role: "Lyrics & Composition & Arrangement",
                year: 2019,
                link: "https://music.youtube.com/watch?v=GKQ0Y9wd-2I&si=fS54CATUPR4D8o0I"
            },
            {
                name: "HANN (Alone)",
                album: "I-DLE HANN",
                role: "Lyrics & Composition & Arrangement",
                year: 2018,
                link: "https://music.youtube.com/watch?v=IoNrByu93BA&si=gGZjzIA1Ut5ifiX1"
            },
            {
                name: "DON'T TEXT ME",
                album: "I-DLE I AM",
                role: "Lyrics",
                year: 2018,
                link: "https://music.youtube.com/watch?v=9qXLfXLluQI&si=uhlatHWRw9gvYwpP"
            },
            {
                name: "MAZE",
                album: "I-DLE I AM",
                role: "Lyrics",
                year: 2018,
                link: "https://music.youtube.com/watch?v=klKKrmRY2R8&si=L0vXcA1wNhvYjBYV"
            },
            {
                name: "$$$ Dollar",
                album: "I-DLE I AM",
                role: "Lyrics & Composition",
                year: 2018,
                link: "https://music.youtube.com/watch?v=sTnQ24z9hIw&si=Uu0cvld7nFboxvXf"
            },
            {
                name: "LATATA",
                album: "I-DLE I AM",
                role: "Lyrics & Composition & Arrangement",
                year: 2018,
                link: "https://music.youtube.com/watch?v=KGKhqdtUWyU&si=Mjotqd6-MhxlZVAV"
            },
        ]
    },
    yuqi: {
        title: "Yuqi",
        photos: ["Photo/Member/Yuqi/Yuqi01.jpg", "Photo/Member/Yuqi/Yuqi02.jpg", "Photo/Member/Yuqi/Yuqi03.jpg"],
        info: {
            fullname: "Song Yuqi 宋雨琦",
            birthdate: "1999-09-23",
            position: "Lead Dancer, Sub-Vocalist, Sub-Rapper, Face of the Group",
            nationality: "China",
            animalcolor: "🦒🐶 (Giraffe & Puppy), Orange",
            personality: "Outgoing • Energetic • Confident"
        },
        awards: [
            { title: "Most Influential Dance Singer of the Year – Tencent Music Entertainment Awards", year: 2025 },
            { title: "China Digital EP of the Year – Tencent Music Entertainment Awards", year: 2025 },
            { title: "Best Solo Artist – Golden Disc Awards", year: 2025 },
            { title: "Most Influential Singer & Dancer of the Year – Weibo Night Awards", year: 2025 },
            { title: "International Influential Artist – Harper’s Bazaar Gala", year: 2025 },
            { title: "Top 100 Singers of the Year – 20th KKBOX Music Awards", year: 2025 },
            { title: "Best Solo Artist – Korea Grand Music Awards", year: 2024 },
            { title: "Top 20 Albums of the Year (Overseas)", year: 2024 },
            { title: "People’s Choice Awards (Overseas)", year: 2024 },
            { title: "People’s Choice Awards (Chinese)", year: 2024 }
        ],
        songs: [
            {
                name: "Gone (Chinese ver.) (还痛吗)",
                album: "YUQI Motivation",
                role: "Lyrics & Composition",
                year: 2025,
                link: "https://music.youtube.com/watch?v=fCWg1XYTySw&si=IfmvXTfeysAJ_FHy"
            },
            {
                name: "Gone (Korean ver.)",
                album: "YUQI Motivation",
                role: "Lyrics & Composition",
                year: 2025,
                link: "https://music.youtube.com/watch?v=9KsOU_20nUU&si=9Nq9kFYLYFj2O9Kz"
            },
            {
                name: "M.O.",
                album: "YUQI Motivation",
                role: "Lyrics & Composition",
                year: 2025,
                link: "https://music.youtube.com/watch?v=ZaPAvNetCoE&si=zmpac59MseippRPJ"
            },
            {
                name: "Love Tease",
                album: "I-DLE We Are",
                role: "Lyrics & Composition",
                year: 2025,
                link: "https://music.youtube.com/watch?v=wxmuTI96h68&si=5aR95NqoNHX9i4SL"
            },
            {
                name: "Radio (Dum-Dum)",
                album: "YUQI Radio (Dum-Dum)",
                role: "Lyrics & Composition",
                year: 2025,
                link: "https://music.youtube.com/watch?v=z2f0vE1-I4k&si=KONJLCOLA7nq1wl2"
            },
            {
                name: "Drive U Crazy",
                album: "MINNIE HER",
                role: "Lyrics",
                year: 2025,
                link: "https://music.youtube.com/watch?v=hjox2LOILR4&si=l-0tO8VD-5r5PpkK"
            },
            {
                name: "Neverland",
                album: "I-DLE I SWAY",
                role: "Lyrics & Composition",
                year: 2024,
                link: "https://music.youtube.com/watch?v=t0Dox99MAIc&si=C0ZTmAw1iHA0Jzqy"
            },
            {
                name: "Last Forever",
                album: "I-DLE I SWAY",
                role: "Lyrics & Composition",
                year: 2024,
                link: "https://music.youtube.com/watch?v=docmg0oGpXY&si=1CXwjV_OBjGpfQG5"
            },
            {
                name: "Everytime",
                album: "YUQI YUQ1",
                role: "Lyrics & Composition",
                year: 2024,
                link: "https://music.youtube.com/watch?v=CSc5zlqIlkM&si=nROD2u9ewz4twIx5"
            },
            {
                name: "On Clap",
                album: "YUQI YUQ1",
                role: "Lyrics & Composition",
                year: 2024,
                link: "https://music.youtube.com/watch?v=vdnD44kRRGs&si=2l1JoKGqpelfYWo6"
            },
            {
                name: "Drink It Up",
                album: "YUQI YUQ1",
                role: "Lyrics & Composition",
                year: 2024,
                link: "https://music.youtube.com/watch?v=EXUPDbFpx8c&si=Z3n_Q6tbCB9d_Bfi"
            },
            {
                name: "My Way",
                album: "YUQI YUQ1",
                role: "Lyrics & Composition",
                year: 2024,
                link: "https://music.youtube.com/watch?v=Wj0tWyLROoo&si=vJtF2Us2g3OwnhZp"
            },
            {
                name: "FREAK",
                album: "YUQI YUQ1",
                role: "Lyrics & Composition",
                year: 2024,
                link: "https://music.youtube.com/watch?v=Kac-3BZ2d4Y&si=2t4LRNMhvP-tmm_R"
            },
            {
                name: "Rollie",
                album: "I-DLE (2)",
                role: "Lyrics & Composition",
                year: 2024,
                link: "https://music.youtube.com/watch?v=TBrlE7qFx2o&si=OZ6e_BOW1RZINdDh"
            },
            {
                name: "Doll",
                album: "I-DLE (2)",
                role: "Lyrics & Composition",
                year: 2024,
                link: "https://music.youtube.com/watch?v=aa-970O1GEc&si=ICcQD9619e9dhI15"
            },
            {
                name: "Peter Pan (어린 어른)",
                album: "I-DLE I FEEL",
                role: "Lyrics",
                year: 2023,
                link: "https://music.youtube.com/watch?v=ypsaGJzyAjg&si=wEBTGnvZF065Iz9n"
            },
            {
                name: "All Night",
                album: "I-DLE I FEEL",
                role: "Lyrics & Composition",
                year: 2023,
                link: "https://music.youtube.com/watch?v=iOoeLYqx3yI&si=cPcWxJOWi7FFXgOq"
            },
            {
                name: "DARK (X-file)",
                album: "I-DLE I LOVE",
                role: "Composition",
                year: 2022,
                link: "https://music.youtube.com/watch?v=uC6tdOZRKms&si=wsP6v1mmO54Nm8kK"
            },
            {
                name: "Reset",
                album: "I-DLE I FEEL",
                role: "Composition & Arrangement",
                year: 2022,
                link: "https://music.youtube.com/watch?v=2X6aKe3XKBs&si=M0P5hShvNUI51_hS"
            },
            {
                name: "LIAR",
                album: "I-DLE I NEVER DIE",
                role: "Lyrics & Composition",
                year: 2022,
                link: "https://music.youtube.com/watch?v=sGEWAOcbMZ0&si=EacEEDL4nvnhexMa"
            },
            {
                name: "POLAROID",
                album: "I-DLE I NEVER DIE",
                role: "Lyrics & Composition & Arrangement",
                year: 2022,
                link: "https://music.youtube.com/watch?v=SaRWYXkWvZI&si=WiTzpHMRShOIFKQd"
            },
            {
                name: "Giant",
                album: "YUQI A Page",
                role: "Lyrics & Composition",
                year: 2021,
                link: "https://music.youtube.com/watch?v=eQ7BuFlIrhM&si=E7sVMGYFM_Eo5bGB"
            },
            {
                name: "HWAA (Chinese Ver.)",
                album: "I-DLE I Burn",
                role: "Lyrics",
                year: 2021,
                link: "https://music.youtube.com/watch?v=2DN9sZzIFrg&si=PbIBb3b4afv3kXTk"
            },
            {
                name: "LOST",
                album: "I-DLE I Burn",
                role: "Lyrics & Composition & Producer",
                year: 2021,
                link: "https://music.youtube.com/watch?v=ILmHLmZiVG0&si=tYHWzrxGXaT98n-j"
            },
            {
                name: "I'M THE TREND",
                album: "I-DLE I'M THE TREND",
                role: "Lyrics",
                year: 2020,
                link: "https://music.youtube.com/watch?v=mBLy9FO88uY&si=YkJVmDPexZjP7cPw"
            }

        ]
    },
    shuhua: {
        title: "Shuhua",
        photos: ["Photo/Member/Shuhua/Shuhua01.jpg", "Photo/Member/Shuhua/Shuhua02.jpg", "Photo/Member/Shuhua/Shuhua03.jpg"],
        info: {
            fullname: "Yeh Shuhua 葉舒華",
            birthdate: "2000-01-06",
            position: "Vocalist, Visual, Maknae",
            nationality: "Taiwan",
            animalcolor: "🦊🐶 (Fox & Puppy), Purple",
            personality: "Honest • Straightforward • Loyal"
        },
        awards: [
            { title: "Best Choice – 10th Asia Artist Awards", year: 2025 }
        ],
        songs: [
            {
                name: "If You Want (그래도 돼요)",
                album: "I-DLE We Are",
                role: "Lyrics",
                year: 2025,
                link: "https://music.youtube.com/watch?v=chjPWMknHgU&si=ohPcaoyW-YrExN2I"
            }
        ],
        love: "Write why you love this member here..."

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
document.getElementById("animalcolor").textContent = data.info.animalcolor;
document.getElementById("personality").textContent = data.info.personality;

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

// Fill Personal Awards
const awardBody = document.querySelector(".member-award-table tbody");

if (awardBody && data.awards) {
    awardBody.innerHTML = "";
    data.awards.forEach((award, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${award.title}</td>
            <td>${award.year}</td>
        `;
        awardBody.appendChild(tr);
    });
}

// Fill "Why I Love This Member"
const loveText = document.getElementById("member-love-text");
if (loveText && data.love) {
    loveText.textContent = data.love;
}


