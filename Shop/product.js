const products = [
    {
        id: 1,
        name: "(G)I-dle Official Lightstick Ver 1",
        price: 300.00,
        category: "lightsticks",
        image: "Photo/Lightstick/VER1_01.jpg",
        thumbnails: ["Photo/Lightstick/VER1_01.jpg", "Photo/Lightstick/VER1_02.jpg"],
        description: "The official (G)I-DLE lightstick Ver.2. Features customizable lighting and Bluetooth connectivity for concert syncing.",
        versions: ["STANDARD Ver."],
        trending: true
    },
    {
        id: 2,
        name: "(G)I-dle Official Lightstick Ver 2",
        price: 150.00,
        category: "lightsticks",
        image: "Photo/Lightstick/VER2_01.jpg",
        thumbnails: ["Photo/Lightstick/VER2_01.jpg", "Photo/Lightstick/VER2_02.jpg", "Photo/Lightstick/VER2_03.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["STANDARD Ver."],
        trending: true
    },
    {
        id: 3,
        name: "I-dle Official Lightstick Ver 3",
        price: 225.00,
        category: "lightsticks",
        image: "Photo/Lightstick/VER3_01.jpg",
        thumbnails: ["Photo/Lightstick/VER3_01.jpg", "Photo/Lightstick/VER3_02.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["STANDARD Ver."],
        trending: true
    },
    {
        id: 4,
        name: "I AM Album",
        price: 70.00,
        category: "albums",
        image: "Photo/Album/IAM_01.jpg",
        thumbnails: ["Photo/Album/IAM_01.jpg", "Photo/Album/IAM_02.jpg", "Photo/Album/IAM_03.jpg", "Photo/Album/IAM_04.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["STANDARD Ver."],
        trending: false
    },
    {
        id: 5,
        name: "I MADE Album",
        price: 70.00,
        category: "albums",
        image: "Photo/Album/IMADE_01.jpg",
        thumbnails: ["Photo/Album/IMADE_01.jpg", "Photo/Album/IMADE_02.jpg", "Photo/Album/IMADE_03.jpg", "Photo/Album/IMADE_04.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["STANDARD Ver."],
        trending: false
    },
    {
        id: 6,
        name: "I TRUST Album",
        price: 70.00,
        category: "albums",
        image: "Photo/Album/ITRUST_01.jpg",
        thumbnails: ["Photo/Album/ITRUST_01.jpg", "Photo/Album/ITRUST_02.jpg", "Photo/Album/ITRUST_03.jpg", "Photo/Album/ITRUST_04.jpg", "Photo/Album/ITRUST_05.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["ANGEL Ver.", "DEVIL Ver."],
        trending: false
    },
    {
        id: 7,
        name: "DUMDI DUMDI Album",
        price: 70.00,
        category: "albums",
        image: "Photo/Album/DUMDI_01.jpg",
        thumbnails: ["Photo/Album/DUMDI_01.jpg", "Photo/Album/DUMDI_02.jpg", "Photo/Album/DUMDI_03.jpg", "Photo/Album/DUMDI_04.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["DAY Ver.", "NIGHT Ver."],
        trending: false
    },
    {
        id: 8,
        name: "I BURN Album",
        price: 80.00,
        category: "albums",
        image: "Photo/Album/IBURN_01.jpg",
        thumbnails: ["Photo/Album/IBURN_01.jpg", "Photo/Album/IBURN_02.jpg", "Photo/Album/IBURN_03.jpg", "Photo/Album/IBURN_04.jpg", "Photo/Album/IBURN_05.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["WINTER Ver.", "FIRE Ver.", "FLOWER Ver."],
        trending: false
    },
    {
        id: 9,
        name: "WINDY Album",
        price: 80.00,
        category: "albums",
        image: "Photo/Album/WINDY_01.jpg",
        thumbnails: ["Photo/Album/WINDY_01.jpg", "Photo/Album/WINDY_02.jpg", "Photo/Album/WINDY_03.jpg", "Photo/Album/WINDY_04.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["STANDARD Ver."],
        trending: false
    },
    {
        id: 10,
        name: "I NEVER DIE Album",
        price: 90.00,
        category: "albums",
        image: "Photo/Album/INEVERDIE_01.jpg",
        thumbnails: ["Photo/Album/INEVERDIE_01.jpg", "Photo/Album/INEVERDIE_02.jpg", "Photo/Album/INEVERDIE_03.jpg", "Photo/Album/INEVERDIE_04.jpg", "Photo/Album/INEVERDIE_05.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["SPOILED Ver.", "RISKY Ver.", "CHILL Ver."],
        trending: false
    },
    {
        id: 11,
        name: "MY Album",
        price: 90.00,
        category: "albums",
        image: "Photo/Album/MY_01.jpg",
        thumbnails: ["Photo/Album/MY_01.jpg", "Photo/Album/MY_02.jpg", "Photo/Album/MY_03.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["STANDARD Ver."],
        trending: false
    },
    {
        id: 12,
        name: "I LOVE Album",
        price: 90.00,
        category: "albums",
        image: "Photo/Album/ILOVE_01.jpg",
        thumbnails: ["Photo/Album/ILOVE_01.jpg", "Photo/Album/ILOVE_02.jpg", "Photo/Album/ILOVE_03.jpg", "Photo/Album/ILOVE_04.jpg", "Photo/Album/ILOVE_05.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["BORN Ver.", "ACT Ver.", "X-FILE Ver."],
        trending: false
    },
    {
        id: 13,
        name: "I LOVE JEWEL VER",
        price: 45.00,
        category: "albums",
        image: "Photo/Album/ILOVEJEWEL_06.jpg",
        thumbnails: ["Photo/Album/ILOVEJEWEL_06.jpg", "Photo/Album/ILOVEJEWEL_01.jpg", "Photo/Album/ILOVEJEWEL_02.jpg", "Photo/Album/ILOVEJEWEL_03.jpg", "Photo/Album/ILOVEJEWEL_04.jpg", "Photo/Album/ILOVEJEWEL_05.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["SOYEON Ver.", "SHUHUA Ver.", "YUQI Ver.", "MIYEON Ver.", "MINNIE Ver."],
        trending: false
    },
    {
        id: 14,
        name: "I FEEL ALBUM",
        price: 90.00,
        category: "albums",
        image: "Photo/Album/IFEEL_01.jpg",
        thumbnails: ["Photo/Album/IFEEL_01.jpg", "Photo/Album/IFEEL_02.jpg", "Photo/Album/IFEEL_03.jpg", "Photo/Album/IFEEL_04.jpg", "Photo/Album/IFEEL_05.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["QUEEN Ver.", "BUTTERFLY Ver.", "CAT Ver."],
        trending: false
    },
    {
        id: 15,
        name: "I FEEL JEWEL VER",
        price: 90.00,
        category: "albums",
        image: "Photo/Album/IFEELJEWEL_01.jpg",
        thumbnails: ["Photo/Album/IFEELJEWEL_01.jpg", "Photo/Album/IFEELJEWEL_02.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["SOYEON Ver.", "MIYEON Ver.", "YUQI Ver.", "MINNIE Ver.", "SHUHUA Ver."],
        trending: false
    },
    {
        id: 16,
        name: "HEAT ALBUM",
        price: 90.00,
        category: "albums",
        image: "Photo/Album/HEAT_01.jpg",
        thumbnails: ["Photo/Album/HEAT_01.jpg", "Photo/Album/HEAT_02.jpg", "Photo/Album/HEAT_03.jpg", "Photo/Album/HEAT_04.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["BLAZE Ver.", "FLARE Ver."],
        trending: false
    },
    {
        id: 17,
        name: "AGASSY ALBUM",
        price: 90.00,
        category: "albums",
        image: "Photo/Album/AGASSY_01.jpg",
        thumbnails: ["Photo/Album/AGASSY_01.jpg", "Photo/Album/AGASSY_02.jpg", "Photo/Album/AGASSY_03.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["RED Ver.", "BLUE Ver."],
        trending: false
    },
    {
        id: 18,
        name: "(2) ALBUM",
        price: 90.00,
        category: "albums",
        image: "Photo/Album/2_01.jpg",
        thumbnails: ["Photo/Album/2_01.jpg", "Photo/Album/2_02.jpg", "Photo/Album/2_03.jpg", "Photo/Album/2_04.jpg", "Photo/Album/2_05.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["0 Ver.", "1 Ver.", "2 Ver."],
        trending: false
    },
    {
        id: 19,
        name: "YUQ1 ALBUM",
        price: 90.00,
        category: "albums",
        image: "Photo/Album/YUQI_01.jpg",
        thumbnails: ["Photo/Album/YUQI_01.jpg", "Photo/Album/YUQI_02.jpg", "Photo/Album/YUQI_03.jpg", "Photo/Album/YUQI_04.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["RABBIT Ver.", "SPECIAL Ver."],
        trending: false
    },
    {
        id: 20,
        name: "RIZZ ALBUM",
        price: 90.00,
        category: "albums",
        image: "Photo/Album/RIZZ_01.jpg",
        thumbnails: ["Photo/Album/RIZZ_01.jpg", "Photo/Album/RIZZ_02.jpg", "Photo/Album/RIZZ_03.jpg", "Photo/Album/RIZZ_04.jpg", "Photo/Album/RIZZ_05.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["DELICATE Ver.", "WILD Ver.", "TEMPTATION Ver."],
        trending: false
    },
    {
        id: 21,
        name: "RIZZ JEWEL VER",
        price: 90.00,
        category: "albums",
        image: "Photo/Album/RIZZJEWEL_01.jpg",
        thumbnails: ["Photo/Album/RIZZJEWEL_01.jpg", "Photo/Album/RIZZJEWEL_02.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["SOOJIN Ver."],
        trending: false
    },
    {
        id: 22,
        name: "I SWAY",
        price: 90.00,
        category: "albums",
        image: "Photo/Album/ISWAY_01.jpg",
        thumbnails: ["Photo/Album/ISWAY_01.jpg", "Photo/Album/ISWAY_02.jpg", "Photo/Album/ISWAY_03.jpg", "Photo/Album/ISWAY_04.jpg", "Photo/Album/ISWAY_05.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["BEAT Ver.", "WIND Ver.", "WAVE Ver."],
        trending: false
    },
    {
        id: 23,
        name: "HER",
        price: 90.00,
        category: "albums",
        image: "Photo/Album/HER_01.jpg",
        thumbnails: ["Photo/Album/HER_01.jpg", "Photo/Album/HER_02.jpg", "Photo/Album/HER_03.jpg", "Photo/Album/HER_04.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["RED Ver.", "PINK Ver."],
        trending: false
    },
    {
        id: 24,
        name: "WE ARE",
        price: 90.00,
        category: "albums",
        image: "Photo/Album/HER_01.jpg",
        thumbnails: ["Photo/Album/HER_01.jpg", "Photo/Album/HER_02.jpg", "Photo/Album/HER_03.jpg", "Photo/Album/HER_04.jpg"],
        description: "The 6th Mini Album 'I feel'. This Queen version includes a photobook, lyric paper, and random photocards.",
        versions: ["RED Ver.", "PINK Ver."],
        trending: false
    }
    
    
];