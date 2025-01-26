import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import CalendarPage from "./components/CalendarPage";
import './styles.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div>
            {isLoggedIn ? (
                <CalendarPage />
            ) : (
                <LoginPage onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;
