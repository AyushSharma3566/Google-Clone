import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
    const [imageSearch, setImageSearch] = useState(false);

    return (
        <Context.Provider
            value={{
                imageSearch,
                setImageSearch,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default AppContext;



// The states which we want throughout the application. We will wrap whole app.jsx code under this 