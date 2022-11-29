import React from 'react'
import imgLogin from '../../assets/img/login.png';

const Register = () => {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100" style={{ height: "678px" }}>
          <div className="login100-pic js-tilt" data-tilt>
            <img src={ imgLogin } alt="IMG" />
          </div>
          <form className="login100-form validate-form">
            <span className="login100-form-title">
              Member register
            </span>
            <div className="wrap-input100 validate-input">
              <input className="input100" type="text" name="email" placeholder="Email" />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Password is required">
              <input className="input100" type="password" name="pass" placeholder="Password" />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>
            <div className="container-login100-form-btn">
              <button className="login100-form-btn">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Register