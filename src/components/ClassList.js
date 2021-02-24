// Styling
import { ListWrapper } from "../styles";
// Components
import Session from "./Class";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import TypesList from "./TypesList";


const ClassList = ({sessiones}) => {
  const [query, setQuery] = useState("");
  const user = useSelector((state) => state.classReducer.user);

  if (!user) return <Redirect to="/signin" />;

  const classList = sessiones
    .filter((session) =>
      session.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((session) => <Session session={session} key={session.id} />);

  return (
    <div className="container">
      <TypesList/>
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{classList}</ListWrapper>
    </div>
  );
};

export default ClassList;
