import "./Tab.css";
import Badge from "../Badge";

export default function Tab({ title, count, isActive }) {
  return (
    <li className={isActive ? "tab tab--active" : "tab"}>
      <span>{title}</span>
      <Badge count={count} isActive={isActive} />
    </li>
  );
}
