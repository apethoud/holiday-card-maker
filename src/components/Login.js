import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { FormContainer, SectionTitle, Label, Input, Button, Text } from './StyledComponents';

const validTestUser = {
    id: "cE5bh7Sgb4gKd8v64h57",
    email: "andrew@email.com",
    password: "abc123"
}

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showLoginError, setShowLoginError] = useState(false);
    let navigate = useNavigate();
    let location = useLocation();
    let { setLoggedInUser } = useContext(UserContext);

    let from = location.state?.from?.pathname || "/";

    function loginUser(user) {
        setLoggedInUser(user);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (email === validTestUser.email && password === validTestUser.password) {
            loginUser(validTestUser);
            navigate(from, { replace: true });
        } else {
            setShowLoginError(true);
        }
      }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 200 }}>
            <div style={{ width: 400 }}>
                <FormContainer>
                    <form onSubmit={handleSubmit}>
                        <SectionTitle>Login</SectionTitle>
                        <div>
                            <Label htmlFor="email">
                                Email
                            </Label>
                            <Input 
                                name="email"
                                type="text"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div>
                            <Label htmlFor="password">
                                Password
                            </Label>
                            <Input 
                                name="password"
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        {showLoginError && (
                            <Text>Error: Invalid credentials</Text>
                        )}
                        <Button primary type="submit">Login</Button>
                    </form>
                </FormContainer>
            </div>
        </div>
    )
}