import React, { useState } from "react";

export const AppContext = React.createContext(null);

export const AppProvider = ({children}) => {
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");

    const setAuthInfo = (userName, password) => {
        setUserName(userName);
        setPassword(password);
    };

    return (
        <AppContext.Provider value={{data: {userName: userName, password: password}, action: setAuthInfo}}>
            {children}
        </AppContext.Provider>
    );
}