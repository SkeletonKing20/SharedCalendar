import React, { useState } from "react";

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [calendarCode, setCalenderCode] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        onLogin();

    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f4f4f9", // Light background color
                margin: 0,
            }}
        >
            <div
                style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "20px",
                    padding: "40px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                    maxWidth: "400px",
                    width: "90%",
                }}
            >
                <h1
                    style={{
                        marginBottom: "20px",
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#333333",
                    }}
                >
                    Shared Calendar
                </h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            width: "100%", // Full width for input
                            padding: "12px",
                            margin: "10px 0",
                            border: "1px solid #d1d5db",
                            borderRadius: "10px",
                            fontSize: "16px",
                            backgroundColor: "#f9fafb",
                            boxSizing: "border-box", // Ensure padding doesn't affect width
                        }}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Passwort"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: "100%", // Full width for input
                            padding: "12px",
                            margin: "10px 0",
                            border: "1px solid #d1d5db",
                            borderRadius: "10px",
                            fontSize: "16px",
                            backgroundColor: "#f9fafb",
                            boxSizing: "border-box", // Ensure padding doesn't affect width
                        }}
                        required
                    />
                    <button
                        type="submit"
                        style={{
                            width: "100%", // Full width for button
                            backgroundColor: "#4f46e5",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "10px",
                            padding: "12px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            transition: "background 0.3s ease",
                            boxSizing: "border-box", // Ensure padding doesn't affect width
                        }}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
