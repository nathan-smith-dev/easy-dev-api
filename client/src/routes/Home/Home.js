import React from 'react';

const home = (props) => {
    return (
        <div>
            <h3>Home Page</h3>
            <div>
                <a href="/auth/google">Login</a>
            </div>
            <div>
                <a href="/api/logout">Logout</a>
            </div>
        </div>
    );
}

export default home;