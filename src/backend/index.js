import React from "react";
import ReactDOM from "react-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import SignIn from "./SignIn";
import "./index.css";

const clerkKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

ReactDOM.render(
    <ClerkProvider publishableKey={clerkKey}>
        <Router>
            <Routes>
                <Route path="/" element={<RegisterForm />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </Router>
    </ClerkProvider>,
    document.getElementById("root")
);
