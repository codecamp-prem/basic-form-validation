export function checkEmail(email){
    const errors = [];
    if (!email.trim().endsWith("@gmail.com")){
        errors.push("only gmail account(@gmail.com) is allowed")
    }
    return errors
}

export function checkPassword(password){
    const errors = [];
    if (password.length < 10){
        errors.push("Must be at least 10 characters")
    }
    if (!password.match(/[a-z]/)){
        errors.push("Must be at least 1 Lowercase Letter")
    }
    if (!password.match(/[A-Z]/)){
        errors.push("Must be at least 1 Uppercase Letter")
    }
    if (!password.match(/[0-9]/)){
        errors.push("Must be at least 1 Numeric Character")
    }
    return errors
}