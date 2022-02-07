import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  Header,
  HeaderText,
  HeaderLink,
  SmallButton
} from "./StyledComponents";
import { NavLink } from "react-router-dom";

export default function AppHeader(props) {
  const { toggleTheme } = useContext(ThemeContext);

  function getStylingByActiveStatus(isActive) {
    return isActive ? { fontWeight: 700 } : { fontWeight: 400 };
  }

  return (
    <Header>
      <HeaderText>Holiday Card Maker</HeaderText>
      <SmallButton onClick={toggleTheme}>Toggle Theme</SmallButton>
      <div className="Flex">
        <NavLink to="/" style={({ isActive }) => getStylingByActiveStatus(isActive)} className="NoUnderline">
          <HeaderLink>Home</HeaderLink>
        </NavLink>
        <NavLink to="/card-builder" style={({ isActive }) => getStylingByActiveStatus(isActive)} className="NoUnderline">
          <HeaderLink>Card Builder</HeaderLink>
        </NavLink>
      </div>
    </Header>
  );
}
