import "./TabBar.css";
import Tab from "../Tab";

export default function TabBar() {
  return (
    <nav className="tab-bar">
      <ul>
        <Tab title="All Entries" count={3} isActive={true} />
        <Tab title="Favorites" count={1} isActive={false} />
      </ul>
    </nav>
  );
}
