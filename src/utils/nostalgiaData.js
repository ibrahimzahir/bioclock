export const eras = {
    1950: { name: "The Rock & Roll Era", song: "Goodnight, Irene - Weavers", event: "First credit card introduced (Diners Club)" },
    1960: { name: "The Swinging Sixties", song: "Theme from A Summer Place", event: "Laser invented" },
    1970: { name: "The Disco Decade", song: "Bridge Over Troubled Water", event: "First jumbo jet flight (Boeing 747)" },
    1980: { name: "The Neon 80s", song: "Call Me - Blondie", event: "Pac-Man released" },
    1990: { name: "The Grunge Era", song: "Hold On - Wilson Phillips", event: "World Wide Web proposal published" },
    2000: { name: "The Y2K Era", song: "Breathe - Faith Hill", event: "PlayStation 2 released" },
    2010: { name: "The Social Media Age", song: "TiK ToK - Ke$ha", event: "iPad released" },
    2020: { name: "The New Roaring 20s", song: "Blinding Lights - The Weeknd", event: "SpaceX launches first crewed flight" },
};

export const getEra = (year) => {
    const decade = Math.floor(year / 10) * 10;
    return eras[decade] || eras[2020]; // Fallback
};
