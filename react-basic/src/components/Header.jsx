const Header = ({ value, list, index }) => {
  return (
    <nav>
      <h1>{value}</h1>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {index + 1} . {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
