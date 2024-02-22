import { createContext } from "react";

export const loggedContext = createContext({
    logged: false,
    setlogged: (status: boolean) => { },
    email: '',
    setEmail: (address: string) => { },
    password: '',
    setPassword: (pass: string) => { },
    alertMsg: '',
    setAlert: (alert: string) => { },
  
  })