import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  Header,
  HeaderText,
  HeaderLink,
  SmallButton
} from "./StyledComponents";
import { Link } from 'react-router-dom';

export default function AppHeader(props) {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Header>
      <HeaderText>Holiday Card Maker</HeaderText>
      <SmallButton onClick={toggleTheme}>Toggle Theme</SmallButton>
      <div className="Flex">
        <Link to="/">
          <HeaderLink>Home</HeaderLink>
        </Link>
        <Link to="/card-builder">
          <HeaderLink>Card Builder</HeaderLink>
        </Link>
      </div>
    </Header>
  );
}
