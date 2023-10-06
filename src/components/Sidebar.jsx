const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__links">
        <li className="sidebar__link">
          <a href="#">about</a>
        </li>
        <li className="sidebar__link">
          <a href="#">services</a>
        </li>
        <li className="sidebar__link">
          <a href="#">projects</a>
        </li>
        <li className="sidebar__link sidebar__contact">
          <a href="#">contact</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
