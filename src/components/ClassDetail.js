import { Link, Redirect, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Components
// Styling
import { DetailWrapper } from "../styles";

const ClassDetail = () => {
  const { sessionSlug } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const sessions = useSelector((state) => state.classReducer.sessions);
  const user = useSelector((state) => state.authReducer.user);
  const loading = useSelector((state) => state.classReducer.loading);
  if (!user) return <Redirect to="/" />;
  //foundSeession
  const foundSeession = sessions.find((_class) => _class.slug == sessionSlug);
  let checkUser = foundSeession.users.some((_user) => _user.id === user.id);
  const userClasses = sessions.filter((_class) =>
    _class.users.some((_user) => _user.id === user.id)
  );
  const bookHandel = () => {
    if (
      (!checkUser &&
        userClasses.some((_class) => _class.date === foundSeession.date)
          .length >= 3) ||
      (!checkUser &&
        userClasses.some(
          (_class) =>
            _class.date === foundSeession.date &&
            _class.time === foundSeession.time
        ))
      //message not alowed to book
    );
  };

  if (!sessions) return <Redirect to="/sessiones" />;

  return (
    <DetailWrapper>
      <h1>{foundSeession.name}</h1>
      <img src={foundSeession.image} alt={foundSeession.name} />
      <p>{foundSeession.numOfSeats}</p>

      <p>{foundSeession.Date}</p>
      <p>{foundSeession.Time}</p>
      {/* <p>{foundSeession.Num}</p> */}
      <p>{foundSeession.price} BHD</p>

      <button onClick={bookHandel}>Book</button>
    </DetailWrapper>
  );
};

export default ClassDetail;
