import "./Entry.css";
import { formatDate } from "../../util/format-date";
import { ReactComponent as Star } from "../../assets/img/star.svg";
import { ReactComponent as StarFilled } from "../../assets/img/star-filled.svg";
export default function Entry({ date, title, text, isFavorite }) {
  const dateObject = new Date(date);
  return (
    <li className="entry">
      <h3>{formatDate(dateObject)}</h3>
      <div className="entry__title-container">
        <h4>{title}</h4>
        {isFavorite ? <StarFilled /> : <Star />}
      </div>
      <p>{text}</p>
      <hr className="entry__line" />
    </li>
  );
}
