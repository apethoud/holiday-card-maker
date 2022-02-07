import { SectionTitle, Text, Button } from './StyledComponents';
import { useNavigate } from 'react-router-dom';
import useHolidayList from "./customHooks/useHolidayList";

export default function Home(props) {
    const holidayList = useHolidayList();
    let navigate = useNavigate();

    const navigateToCardMaker = () => {
        navigate("/card-builder");
    }

    return (
        <>
            <SectionTitle>An E-Card For Every Occasion</SectionTitle>
            <Text>Holiday Card Maker has you covered for all your digital holiday card needs! Choose from {holidayList.length} different holidays.</Text>
            <Button onClick={() => navigateToCardMaker()}>Get Started</Button>
        </>
    )
}