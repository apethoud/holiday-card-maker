import "./styles.scss";
import { AppContainer } from "./components/StyledComponents";
import AppHeader from "./components/AppHeader";
import CardBuilder from "./components/CardBuilder";

export default function App() {
  return (
    <AppContainer>
      <AppHeader />
      <div className="ViewContainer">
        <CardBuilder />
      </div>
    </AppContainer>
  );
}
