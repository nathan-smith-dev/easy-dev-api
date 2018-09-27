import React from 'react';
import { signInWithRedirect, signOut, getAuthToken } from '../../services/authService';

const home = (props) => {
    return (
        <div>
            <h3>Home Page</h3>
            <div>
                <button onClick={() => signInWithRedirect()}>Login</button>
            </div>
            <div>
                <button onClick={() => signOut()}>Logout</button>
            </div>
            <div>
                <button onClick={() => getAuthToken().then(token => console.log(token))}>Get Auth Token</button>
            </div>
        </div>
    );
}

export default home;