import React, { useEffect, useState } from "react";
import { Game } from "../Types";
import { fetchGame } from "../Service/GameService";
import { useParams } from "react-router-dom";
import "./GameDetails.scss";
import Rating from "./Rating";
import HomeButton from "./HomeButton";
/**
 * GameDetails Component
 *
 * a details page for a specific game, including title, image, information, description, and ratings.
 *
 * @returns {JSX.Element}
 */
const GameDetails = () => {
  const [game, setGame] = useState<Game>();
  const { id } = useParams();
  //fetch data from API
  useEffect(() => {
    async function fetchData() {
      setGame(await fetchGame(id as string));
    }
    fetchData();
  }, [id]);
  console.log(game);
  return (
    <>
      <HomeButton></HomeButton>
      <div className="game-title">{game?.name}</div>
      <div className="game-details-wrapper">
        <div className="game-details-image-container">
          <img
            className="game-details-image"
            src={game?.background_image}
          ></img>
          <div className="info-card">
            <div>
              <b>Website:</b> <a>{game?.website}</a>
            </div>
            <div>
              <b>Creator:</b> {game?.developers[0].name}
            </div>
            <div>
              <b>Rating:</b> {game?.esrb_rating.name}
            </div>
            <div>
              <b>Released:</b> {game?.released}
            </div>
            <div>
              <b>Playtime:</b> {game?.playtime} hours
            </div>
          </div>
        </div>
        <div className="right">
          <div className="rating-wrapper">
            <div className="rating">{game?.rating}</div>
            <div className="rating-total">out of 5</div>
          </div>
          <div className="description">
            <h3>Description</h3>
            <p>{game?.description_raw}</p>
          </div>
          {game?.ratings.map((item, index) => (
            <Rating
              percent={game?.ratings[index].percent}
              title={game?.ratings[index].title}
              count={game?.ratings[index].count}
            ></Rating>
          ))}
        </div>
      </div>
    </>
  );
};

export default GameDetails;
