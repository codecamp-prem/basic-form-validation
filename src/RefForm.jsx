import { useRef, useState } from "react"
import { checkEmail, checkPassword } from "./validators"

export function RefForm(){
    const emailRef = useRef()
    const passwordRef = useRef()

    const [emailErrors, setEmailErrors] = useState([])
    const [passwordErrors, setPasswordErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()

        const emailResult = checkEmail(emailRef.current.value)
        const passwordResult = checkPassword(passwordRef.current.value)

        setEmailErrors(emailResult)
        setPasswordErrors(passwordResult)

        if (emailResult.length == 0 && passwordResult.length==0){
            alert("success")
        }
    }
    return (
        <>
          <form onSubmit={onSubmit} className="form">
            <div className={`form-group ${emailErrors.length > 0 ? "error":""}`}>
              <label className="label" htmlFor="email">Email</label>
              <input 
                className="input" 
                type="email" 
                id="email" 
                ref={emailRef}
              />
              {emailErrors.length > 0 && (<div className="msg">{emailErrors.join(", ")}</div>)}
            </div>
            <div className={`form-group ${passwordErrors.length > 0 ? "error":""}`}>
              <label className="label" htmlFor="password">Password</label>
              <input
                className="input"
                type="password"
                id="password"
                ref={passwordRef}
              />
              {passwordErrors.length > 0 && (<div className="msg">{passwordErrors.join(", ")}</div>)}
            </div>
            <button className="btn" type="submit">Submit</button>
          </form>
        </>
      )
}