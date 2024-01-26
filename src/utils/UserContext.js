import { createContext } from "react";

const UserContext = createContext({
    loggedInUSer: "Default Name",
});

export default UserContext;