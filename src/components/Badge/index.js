import "./Badge.css";
export default function Badge({ count, isActive }) {
  return (
    <div className={isActive ? "badge badge--active" : "badge"}>{count}</div>
  );
}
