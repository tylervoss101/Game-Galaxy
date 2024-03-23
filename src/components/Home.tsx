import React from "react";
import GameList from "./GameList";
import "./Home.scss";
import { MdGames } from "react-icons/md";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { LuGamepad2 } from "react-icons/lu";
import { BiGame } from "react-icons/bi";
import HomeButton from "./HomeButton";

/**
 * Home Component
 *
 * Renders the home page the website.
 * Displays the title, icons, and game lists
 *
 * @returns {JSX.Element}
 */
const Home = () => {
  return (
    <>
      <HomeButton></HomeButton>
      <div className="home-container">
        <div className="title-container">
          <div className="title">Game Galaxy</div>
          <p>Learn more about your favorite games!</p>
        </div>
        <div className="icon-container">
          <MdGames />
          <MdOutlineVideogameAsset />
          <LuGamepad2 />
          <BiGame />
        </div>
      </div>
      <div>
        <GameList title="Top Games"></GameList>
        <GameList title="Date Released" sortMethod="date"></GameList>
        <GameList title="Alphabetical" sortMethod="name"></GameList>
      </div>
    </>
  );
};

export default Home;
