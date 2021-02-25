import {
  Logo,
  AuthButtonStyled,
  UsernameStyled,
  NavStyled,
  NavGym,
} from "../styles";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { signout } from "../store/actions/authActions";
import NewGym from "./NewGym";

const NavBar = () => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  return (
    <NavStyled className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <img
          src="https://i.pinimg.com/originals/84/13/bc/8413bc86cd315360a8c35377f413f2a8.png"
          alt="logo"
        />
      </Logo>
      <h4>GYM!</h4>

      <div className="navbar-nav ml-auto">
        <Link className="nav-item nav-link" to="/gyms">
          Gyms
        </Link>
        {user ? (
          <>
            <UsernameStyled>Hello, {user.username}! </UsernameStyled>
            <FiLogOut
              onClick={() => dispatch(signout())}
              color="yellow"
              size="1.5em"
            />
          </>
        ) : (
          <>
            <Link to="/signup">
              <AuthButtonStyled>Sign up</AuthButtonStyled>
            </Link>
            <Link to="/signin">
              <AuthButtonStyled>Sign in</AuthButtonStyled>
            </Link>
            {/* 
            <Link>
              <NewGym />
            </Link> */}
          </>
        )}
      </div>
    </NavStyled>
  );
};

export default NavBar;
