import { Link } from "react-router-dom";

// Styling
import { ItemWrapper } from "../styles";

const GymItem = ({ gym }) => {
  return (
    <ItemWrapper >
      <Link to={`/gyms/${gym.slug}/classes`}>
        <img alt={gym.name} src={gym.image} />
      </Link>
      <p>{gym.name}</p>
      <Link to={`/gyms/${gym.id}/classes/new`}>
        <button type="button" className="btn btn-info">Add class</button>
      </Link>
    </ItemWrapper>
  );
};

export default GymItem;
