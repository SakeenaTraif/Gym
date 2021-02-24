import { useSelector } from "react-redux";
import GymItem from "./GymItem";

function GymsList() {
  const gyms = useSelector((state) => state.gymReducer.gyms);
  return (
    <div>
      {gyms.map((gym) => (
        <GymItem key={gym.id} gym={gym} />
      ))}
    </div>
  );
}
export default GymsList;