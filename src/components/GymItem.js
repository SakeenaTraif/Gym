import { Link } from "react-router-dom";

// Styling
import { ListWrapper } from "../styles";

const GymItem = ({ gym }) => {
  return (
    <ListWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/gyms/${gym.slug}`}>
        <img alt={gym.name} src={gym.image} />
      </Link>
      <p >{gym.name}</p>
    </ListWrapper>
  );
};

export default GymItem;
