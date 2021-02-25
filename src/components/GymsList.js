import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GymItem from "./GymItem";
import { Redirect } from "react-router-dom";

function GymsList() {
  const loading = useSelector((state) => state.loading);
  const gyms = useSelector((state) => state.gymReducer.gyms);
  const user = useSelector((state) => state.authReducer.user);

  if (!user || user.type !== "admin") {
    return <Redirect to="/" />;
  }
  let gymList = gyms.map((gym) => <GymItem key={gym.id} gym={gym} />);
  return (
    <div>
      {loading ? gymList : "Loading..."}
      {user.isadmin === true && (
        <Link to="/gyms/new">
          <button>Add new</button>
        </Link>
      )}
    </div>
  );
}
export default GymsList;
