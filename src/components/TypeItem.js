// Styling
import { ListWrapper } from "../styles";

import { Link } from "react-router-dom";

const Type = ({ type }) => {
  return (
    <ListWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/types/${type.slug}`}>
        <img alt={type.name} src={type.image} />
      </Link>
      <p >{type.name}</p>
    </ListWrapper>
  );
};

export default Type;
