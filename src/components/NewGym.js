import { addGym } from "../store/actions/gymActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { useState } from "react";

const NewGym = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { gymSlug } = useParams();
  const foundGym = useSelector((state) =>
    state.gymReducer.gyms.find((gym) => gym.slug === gymSlug)
  );

  const [gym, setGym] = useState(
    foundGym ?? {
      name: "",
      image: "",
    }
  );

  const handleChange = (event) =>
    setGym({ ...gym, [event.target.name]: event.target.value });
    

  const handleImage = (event) =>
    setGym({ ...gym, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addGym(gym));
    history.push("/gyms");
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>New Gym</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={gym.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Image</label>
        <input
          type="file"
          onChange={handleImage}
          name="image"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-info float-right">
      </button>
    </form>
  );
};

export default NewGym;