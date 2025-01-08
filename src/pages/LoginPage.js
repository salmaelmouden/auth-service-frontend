import React from "react";

const LoginPage = () => {
    const handleLogin = () => {
        window.location.href = "/oauth2/authorization/github"; // Redirect to backend
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login with GitHub</button>
        </div>
    );
};

export default LoginPage;
