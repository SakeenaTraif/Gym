import { useSelector } from "react-redux";
import Type from "./TypeItem";

function TypesList() {
  const types = useSelector((state) => state.typeReducer.types);
  return (
    <div>
      {types.map((type) => (
        <Type key={type.id} type={type} />
      ))}
    </div>
  );
}
export default TypesList;