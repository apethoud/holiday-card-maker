import useHolidayList from "./customHooks/useHolidayList";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  Header,
  HeaderText,
  HeaderSubtext,
  SmallButton
} from "./StyledComponents";

export default function AppHeader(props) {
  const holidayList = useHolidayList();
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Header>
      <HeaderText>Holiday Card Maker</HeaderText>
      <SmallButton onClick={toggleTheme}>Toggle Theme</SmallButton>
      <HeaderSubtext>
        Pick from {holidayList.length} different holidays!
      </HeaderSubtext>
    </Header>
  );
}
