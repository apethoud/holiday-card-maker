import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContainer, SectionTitle, Label, Input, Button, Text } from './StyledComponents';

const validTestUser = {
    email: "andrew@email.com",
    password: "abc123"
}

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showLoginError, setShowLoginError] = useState(false);
    let navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        if (email === validTestUser.email && password === validTestUser.password) {
            navigate("/card-builder");
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