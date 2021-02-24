import { addClass } from "../store/actions/classActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { useState } from "react";

const NewClass = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { classSlug, gymId } = useParams();
  const foundClass = useSelector((state) =>
    state.classReducer.classes.find((session) => session.slug === classSlug)
  );

  const [session, setClass] = useState(
    foundClass ?? {
      gymId: gymId,
      name: "",
      numOfSeates:"",
      bookedSeats:"",
      price: 0,
      date: "",
      time:"",
      image: "",
      type:"",
    }
  );

  const handleChange = (event) =>
    setClass({ ...session, [event.target.name]: event.target.value });
    

  const handleImage = (event) =>
    setClass({ ...session, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addClass(session));
    history.push("/sessiones");
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>New Class</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={session.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Number of Seats</label>
        <input
          type="number"
          value={session.numOfseats}
          onChange={handleChange}
          name="numOfseats"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          value={session.price}
          onChange={handleChange}
          name="price"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Type of Class</label>
        <input
          type="text"
          value={session.description}
          onChange={handleChange}
          name="type"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Date</label>
        <input
          type="date"
          value={session.date}
          onChange={handleChange}
          name="date"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Time</label>
        <input
          type="time"
          value={session.time}
          onChange={handleChange}
          name="time"
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

export default NewClass;
