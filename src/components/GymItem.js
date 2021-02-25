import { Link } from "react-router-dom";

// Styling
import { ListWrapper } from "../styles";

const GymItem = ({ gym }) => {
  return (
    <ListWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/gyms/${gym.slug}/classes`}>
        <img alt={gym.name} src={gym.image} />
      </Link>
      <p>{gym.name}</p>
      <Link to={`/gyms/${gym.slug}/classes/new`}>
        <button>Add class</button>
      </Link>
    </ListWrapper>
  );
};

export default GymItem;
