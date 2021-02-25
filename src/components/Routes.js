// React-Router
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";

// Components
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import NewGym from "./NewGym";
import NewClass from "./NewClass";
import GymList from "./GymsList";
import ClassList from "./ClassList";
import ClassDetail from "./ClassDetail";

function Routes() {
  const session = useSelector((state) => state.classReducer.session);

  return (
    <Switch>
      <Route path={["/gyms/:gymId/classes/new"]}>
        <NewClass />
      </Route>
      <Route path="/classes/:classSlug">
        <ClassDetail />
      </Route>
      <Route path={["/gyms/:gymId/classes"]}>
        <ClassList session={session} />
      </Route>
      <Route path={["/gyms/new"]}>
        <NewGym />
      </Route>

      <Route exact path="/gyms">
        <GymList />
      </Route>

      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
