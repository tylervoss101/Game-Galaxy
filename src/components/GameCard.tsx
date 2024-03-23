import React from "react";
import "/src/App.scss";
import { Game } from "../Types";
import { Link } from "react-router-dom";
import "./GameCard.scss";
interface Props {
  game: Game;
}
/**
 * GameCard Component
 *
 * Displays a card representing a game with its name, image, and rating.
 * Clicking on the card brings user to game details page for that game
 *
 *
 * @param {Props} props - Props object
 * @returns {JSX.Element}
 */
const GameCard = ({ game }: Props) => {
  return (
    <Link to={`/game-details/${game.id}`}>
      <div className="card">
        <p className="game-name"> {game.name}</p>
        <div className="game-image-container">
          <img
            className="game-image"
            src={game.background_image}
            alt={game.name}
          />
        </div>

        <div>
          ⭐<b>{game.rating}/5</b>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
