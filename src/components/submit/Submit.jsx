import { useState } from "react"
import ListIcon from "./ListIcon"


import sinUpMobile from "../../assets/illustration-sign-up-mobile.svg"
import sinUpDesktop from "../../assets/illustration-sign-up-desktop.svg"
import { validEmail } from "./ValidEmail"

import "./submit.scss"
const Submit = ({setSuccess}) => {
    const [error  , setError] = useState("")
    const [email , setEmail] = useState("")

    const handleChange = (e)=>{
        let value = e.target.value
        setEmail(value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()

        if(email.length === 0 ){
            setError("email can't be empty")
        }
       else if(!validEmail.test(email)){
           setError("Valid email required")
       }
       else {
         setSuccess(email)
       }
    }
    return (
        <section className="submitFormContainer">
            <div className="itemSection">
              <div className="title">
                <h2>
                Stay updated!     
                </h2>
                <p>
                    Join 60,000+ product managers receiving monthly updates on:  
                </p>
              </div>

              <ul className="list">
                  <li>
                      <span> <ListIcon/> </span>
                      <p>Product discovery and building what matters</p>
                  </li>
                  <li>
                      <span><ListIcon/></span>
                      <p>Measuring to ensure updates are a success</p>
                  </li>
                  <li>
                      <span><ListIcon/></span>
                      <p>And much more!</p>
                  </li>
              </ul>

              <form onSubmit={handleSubmit}>
                  <span className="error">{error}</span>
                <div className={error.length > 1 ? "inputContainer error" : "inputContainer"}>
                    <label htmlFor="email">Email address</label>
                    <input type="text" name="email" id="email" 
                    placeholder="email@company.com"
                    value={email} onChange={handleChange}
                    />
                </div>
                <div className="btnContainer">
                    <button type="submit">
                      Subscribe to monthly newsletter
                    </button>
                </div>
              </form>
            </div>
            
            <div className="imageSection">
                <div className="desktop">
                    <img src={sinUpDesktop} alt=""/>
                </div>

                <div className="mobile">
                    <img src={sinUpMobile} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Submit
