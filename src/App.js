import "./styles.scss";
import { Outlet } from 'react-router-dom';
import { AppContainer } from "./components/StyledComponents";
import AppHeader from "./components/AppHeader";

export default function App() {
  return (
    <AppContainer>
      <AppHeader />
      <div className="ViewContainer">
        <Outlet />
      </div>
    </AppContainer>
  );
}
