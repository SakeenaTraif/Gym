import { Link } from "react-router-dom";
// Styling
import { SessionWrapper } from "../styles";

const Session = ({ session }) => {
  return (
    <SessionWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/session/${session.slug}`}>
        <img alt={session.name} src={session.image} />
      </Link>
      <p className="session-name">{session.name}</p>
    </SessionWrapper>
  );
};
export default Session;