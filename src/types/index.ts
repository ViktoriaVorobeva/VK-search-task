import React from "react";

export interface ContextState {
    users: User[],
    isError: boolean, 
    isLoading: boolean,
    isNotFound: boolean 
}

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    image: string,
    address: {
      city: string,
    },
}

export interface SearchProps {
    setUsers: React.Dispatch<React.SetStateAction<User[]>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>> 
    setError: React.Dispatch<React.SetStateAction<boolean>>
    setNotFound: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ApiResponce {
    users: User[],
    total: number,
    skip: number,
    limit: number
}