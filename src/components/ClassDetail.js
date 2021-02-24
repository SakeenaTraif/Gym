import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// Components
// Styling
import { DetailWrapper } from "../styles";

const ClassDetail = () => {
  const { sessionSlug } = useParams();
  const session = useSelector((state) =>
    state.classReaduder.sessions.find((session) => session.slug === sessionSlug)
  );

  if (!session) return <Redirect to="/sessiones" />;

  return (
    <DetailWrapper>
      <h1>{session.name}</h1>
      <img src={session.image} alt={session.name} />
      <p>{session.Date}</p>
      <p>{session.Time}</p>
      {/* <p>{session.Num}</p> */}
      <p>{session.price} BHD</p>
    </DetailWrapper>
  );
};

export default ClassDetail;
