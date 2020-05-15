import React, { useState } from "react";
import useInput from "@am-hooks/use-input";
import AuthPresenter from "./AuthPresenter";

export default () => {
    const [action, setAction] = useState("logIn");
    const userName = useInput("");
    const email = useInput("");
    const password = useInput("");
    const secret = useInput("");

    return (
        <AuthPresenter 
            action={action} 
            setAction={setAction}
            userName={userName}
            email={email}
            password={password}
            secret={secret}
        />
    );
};