import React from 'react';
import { signInWithRedirect, signOut, getAuthToken } from '../../services/authService';
import Container from '../../components/default/Container';
import Button from '../../components/default/Button';
import Header from '../../components/default/Header';

const home = (props) => {
    return (
        <Container>
            <Header>Home Page</Header>
            <div>
                <Button onClick={() => signInWithRedirect()}>Login</Button>
            </div>
            <div>
                <Button onClick={() => signOut()}>Logout</Button>
            </div>
            <div>
                <Button onClick={() => getAuthToken().then(token => console.log(token))}>Get Auth Token</Button>
            </div>
        </Container>
    );
}

export default home;