import axios from "axios";

const getEvolutionsData = (evolutions) => {
  return evolutions.map(
    async (evolution) =>
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${evolution.name}/`)
  );
};

const getPokemonData = async (name) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}-gmax`
    );
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      return response.data;
    }
    throw error;
  }
};


export { getEvolutionsData, getPokemonData };