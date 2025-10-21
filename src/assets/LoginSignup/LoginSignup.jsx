import { useState } from 'react'
import './LoginSignup.css'

import userNameImg from '../images/userName.png'
import emailImg from '../images/email.png'
import passwordImg from '../images/password.png'
import showImg from '../images/show.png'
import hideImg from '../images/hide.png'
  
function LoginSignup() {

  const [action, setAction] = useState('Sign up')
  const [toggleImg, setToggleImg] = useState(hideImg)

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action==="Login" 
            ? null 
            : <div className="input">
                <img src={userNameImg} />
                <input type="text" placeholder='Username'/>
              </div>
          }
          <div className="input">
            <img src={emailImg} />
            <input type="email" placeholder='Email' required/>
          </div>
          <div className="input">
            <img src={passwordImg} />
            <input type="password" placeholder='Password' required  />
            <img className="toggle-visibility" onClick={() => {toggleImg === hideImg 
              ? setToggleImg(showImg) 
              : setToggleImg(hideImg)}} 
              src={toggleImg === hideImg ? showImg : hideImg}
            />
          </div>
        </div>

        {action==="Sign up" 
          ? null 
          : <div className="forgot-password">
              Forgot password? 
              <span> Click here</span>
            </div>
        }

        <div className="submit-container">
          <div className={action==="Login" ? "submit gray" : "submit"} 
            onClick={() => setAction('Sign up')}>Sign up
          </div>
          <div className={action==="Sign up" ? "submit gray" : "submit"} 
            onClick={() => setAction('Login')}>Login
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginSignup;