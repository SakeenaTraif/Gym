import { Link, Redirect, useParams } from "react-router-dom";

import { DetailWrapper } from "../styles";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import ClassList from "./ClassList";

const gymDetails = () => {
  const gymSlug = useParams().gymSlug;
  const allClasses = useSelector((state) => state.classReducer.sessiones);
  const gym = useSelector((state) =>
    state.gymReducer.gyms.find((gym) => gym.slug === gymSlug)
  );

  const sessiones = gym.sessiones.map((session) =>
  allClasses.find((_session) => _session.id === session.id)
  );

  if (!gym) return <Redirect to="/gyms" />;
  return (
    <>
      <DetailWrapper className="text-left">
        <Helmet>
          <title>{gym.name}</title>
        </Helmet>
        <h1>{gym.name}</h1>
      </DetailWrapper>
      <Link to={`/gyms/${gym.id}/classes/new`}>
        Add class
      </Link>
      <ClassList sessiones={sessiones} />
    </>
  );
};

export default gymDetails;