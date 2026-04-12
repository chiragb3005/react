import React from "react";
import UserContext from "./UserContext";

const userContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)



    return (
        <UserContext.Provider value={{user, setUser}}>      
        {/* // here im passing user and setUser and later im using it in login.jsx */}
            {children}
        </UserContext.Provider>
    )

}

export default userContextProvider;