import React from 'react';
import { signInWithRedirect, signOut, getAuthToken } from '../../services/authService';
import Container from '../../components/container';
import Button from '../../components/button';
import Header from '../../components/header';

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