export const getCharactersList = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error("Error fetching people:", err);
    throw err;
  }
};

export const getVehicleList = async () => {
  try {
    const res = await fetch("https://swapi.dev/api//vehicles/");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error("Error fetching vehicles:", err);
    throw err;
  }
};

export const getPlanetList = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/planets/");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error("Error fetching planets:", err);
    throw err;
  }
};
