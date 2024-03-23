import { Game } from "../Types";
/**
 * Fetches a list of games from the RAWG API.
 *
 * @param {string} sortMethod - Sorting method for the fetched games (optional).
 * @returns {Promise<Game[]>} - A promise that resolves to an array of Game objects.
 */
export const fetchGames = async (sortMethod: string) => {
  //fetch games from RAWG api
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${import.meta.env.VITE_KEY}`
  );
  //extract array of games from response and cast it as Game[]
  const fetchedGames = (await response.json()).results as Game[];
  //sort games if needed
  if (sortMethod) {
    if (sortMethod == "date") {
      fetchedGames.sort((a, b) => {
        const nameA = a.released;
        const nameB = b.released;

        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else if (sortMethod == "name") {
      fetchedGames.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }
  }
  return fetchedGames;
};
/**
 * Fetches information about a specific game from the RAWG API.
 *
 * @param {string} id - ID of the game to fetch.
 * @returns {Promise<Game>} - A promise that resolves to a Game object.
 */
export const fetchGame = async (id: string) => {
  const response = await fetch(
    `https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_KEY}`
  );
  const fetchedGame = (await response.json()) as Game;
  return fetchedGame;
};
