import { SectionTitle, Text, Button } from './StyledComponents';
import { useNavigate } from 'react-router-dom';

export default function Home(props) {
    let navigate = useNavigate();

    const navigateToCardMaker = () => {
        navigate("/card-builder");
    }

    return (
        <>
            <SectionTitle>An E-Card For Every Occasion</SectionTitle>
            <Text>Holiday Card Maker has you covered for all your digital holiday card needs!</Text>
            <Button onClick={() => navigateToCardMaker()}>Get Started</Button>
        </>
    )
}