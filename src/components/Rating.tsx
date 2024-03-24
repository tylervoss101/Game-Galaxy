import React from "react";
import "./Rating.scss";
interface Props {
  percent: number;
  title: string;
  count: number;
}
/**
 * Rating Component
 *
 * Renders a rating card displaying the percentage of players thoughts on the game
 *
 * @param {Props} props - Props object containing percent, title, and count.
 * @returns {JSX.Element}
 */
const Rating = ({ percent, title, count }: Props) => {
  const colorMap = {
    recommended: "green",
    meh: "yellow",
    skip: "red",
    exceptional: "light-blue",
  };
  const color = colorMap[title] || "green";
  return (
    <div className={`rating-card ${color}`}>
      <div>
        <h3>{title}</h3>
        <div>
          <span className="rating-percent">{percent}%</span> of players think
          this
        </div>
        <div className="count">Count: {count}</div>
      </div>
    </div>
  );
};

export default Rating;
