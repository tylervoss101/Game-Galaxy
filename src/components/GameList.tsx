import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";
import "/src/App.scss";
import { Game } from "../Types";
import "./GameList.scss";
import { fetchGames } from "../Service/GameService";
interface Props {
  title: string;
  sortMethod?: string;
}
/**
 * GameList Component
 *
 * Renders a list of games with optional sorting
 *
 * @param {Props} props - Props object with title and sortMethod.
 * @returns {JSX.Element}
 */
const GameList = ({ title, sortMethod }: Props) => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    async function fetchData() {
      setGames(await fetchGames(sortMethod as string));
    }
    fetchData();
  }, [sortMethod]);

  return (
    <>
      <h1>{title}</h1>
      <div className="card-wrapper">
        {games.map((game) => {
          return <GameCard game={game}></GameCard>;
        })}
      </div>
    </>
  );
};

export default GameList;
