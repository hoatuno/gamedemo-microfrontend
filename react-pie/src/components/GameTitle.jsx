import { Link } from "react-router-dom";

const GameTitle = ({ children, path }) => {
  return (
    <Link className="tile rows-2 cols-2" to={path}>
      <div className="teaser">{children}</div>
    </Link>
  );
};
export default GameTitle;
