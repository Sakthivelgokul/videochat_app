import { createRoot } from "react-dom/client";
import './index.css';
import { AuthProvider } from "./firebaseJs/AuthContex"
import {Loginpage} from "./componts/LoginPage";
import Homepage from "./componts/HomePage";
import { LoginContexProvider } from "./firebaseJs/LoginContex"
import { useAuthStateContex, /* useAuthUpateContex */ } from "./firebaseJs/AuthContex"
import {UserDataProvider} from "./firebaseJs/userDataContext"
// eslint-disable-next-line no-unused-vars
import { app } from "./firebase"

export default function Main() {
    const authState = useAuthStateContex();

    if (authState) {
        return (
            <UserDataProvider>
                <Homepage />
            </UserDataProvider>
        )
    }
    else {
        return (
            <LoginContexProvider>
                <Loginpage />
            </LoginContexProvider>
        )
    }

}

createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <Main />
    </AuthProvider>
)