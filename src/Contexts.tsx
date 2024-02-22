import { createContext } from "react";

export const loggedContext = createContext({
    logged: false,
    setlogged: (status: boolean) => { },
    email: '',
    setEmail: (address: string) => { },
    password: '',
    setPassword: (pass: string) => { },
    emailAlertMsg: '',
    setEmailAlertMsg: (alert: string) => { },
    passwordAlertMsg: '',
    setPasswordAlertMsg: (alert: string) => { },
    registerPressed:false,
    setRegisterPressed:(pressed:boolean)=>{},
    fName: '',
    setfName: (fName: string) => { },
    lName: '',
    setlName: (lName: string) => { },
  })