import React, { createContext } from "react";


// context give the major things as 'provider'
// as it provides the context of a specific place
// wrapping conmponents <UserContext> ... <UserContext /> that will have the access of context of the global of our context
// mkaing provider in diff file same folder

const UserContext = React.createContext()


export default UserContext;