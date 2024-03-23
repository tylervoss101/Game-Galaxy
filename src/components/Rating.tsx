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
  let color = "green";
  if (title == "recommended") {
    color = "green";
  } else if (title == "meh") {
    color = "yellow";
  } else if (title == "skip") {
    color = "red";
  } else if (title == "exceptional") {
    color = "light-green";
  }
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
