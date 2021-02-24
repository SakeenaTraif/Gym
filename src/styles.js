import styled from "styled-components";
import { Link} from "react-router-dom";

export const NavStyled = styled.nav`
  background-color:#6eb2cc ;
`;

export const Logo = styled(Link)`
  img {
    width: 5rem;
  }
`;

export const AuthButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: #e7e7e7;
  color: black;
`;

export const UsernameStyled = styled.p`
  padding: 0.25em 1em;
  color: black;
`;

export const ItemWrapper = styled.div`
  display: inline-block;
  align-items: center;
  margin: 10px;
  text-align: center;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    color: black;
  }
`;
export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const NavGym = styled(Link)`
  color: black;
  padding: 0.25em 1em;
  &.active {
  color: blue;
  }
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const SessionWrapper = styled.div`
  color: ${(props) => props.theme.mainColor};
  text-decoration: none;
  text-align: center;

  img {
    width: 12em;
    height: 12em;
  }

  `;