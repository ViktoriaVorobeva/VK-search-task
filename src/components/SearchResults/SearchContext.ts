import { createContext } from "react";
import { ContextState } from "../../types";

const initialState: ContextState = {
    users: [],
    isError: false, 
    isLoading: false,
    isNotFound: false 
}

export const SearchContext = createContext(initialState);
