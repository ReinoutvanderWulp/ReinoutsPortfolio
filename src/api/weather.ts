const API_KEY = import.meta.env.API_KEY as string;
const BASE_URL = import.meta.env.BASE_URL;

const fetchWeather = async (plaatsNaam: string) => {
  const url = `${BASE_URL}?q=${plaatsNaam}&appid=${API_KEY}&units=metric&lang=nl`;
  const response = await fetch(url);

  if (!response.ok){
    throw new Error(`Fout bij het zoeken. Is de plaatsnaam correct?`);
  }
}