export const checkMail = (email: string) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email)
}

export const checkPass = (password: string) => {
    if (password.length >= 8)
        if (/^(?=.*[A-Z])/.test(password))
            if (/^(?=.*[a-z])/.test(password))
                if (/^(?=.*[!@#$%^&*])/.test(password))
                    return "OK"
                else return "password does not contain special characters."
            else return "password does not contain lower case letters."
        else return "password does not contain capital letters."
    else return "password is shorter then required, please use password with at least 8 characters."
}