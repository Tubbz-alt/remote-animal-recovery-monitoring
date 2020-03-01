import React from 'react';
import {store} from '../store';
import {LoginAction, LogoutAction} from './AccountAction';

class Account extends React.Component {

  constructor() {
    super();
    const rerenderer = store.subscribe(() => this.forceUpdate());
  }

	render() {
	  if (store.getState().loggedIn) {
      return (
        <div className="center">
          You are already logged in.
          <br/>

          <button className="blueButton" onClick={() => window.location.href = "/#/account"}>
            My Account
          </button>
          <br/>

          <button className="blueButton" onClick={() => store.dispatch(LogoutAction())}>
            Log out
          </button>
        </div>
      );
    } else {
      return (
        <div className="center">
          <form onSubmit={this.login}>
            <label id="feedback" className="center">
            Log in to the system below.
            </label>
            <br/>

            <input type="email" id="email_box" placeholder="Email" required/>
            <br/>

            <input type="password" id="password_box" placeholder="Password" required/>
            <br/>

            <label>
              <input type="checkbox" onClick={this.showPassword}/>
              Show password?
            </label>
            <br/>

            <input type="submit" value="Log in"/>
            <br/>
          </form>

          <button className="text" onClick={() => window.location.href='/#/register'}>
            Don't have an account? Register here
          </button>
          <br/>

          <button className="text" onClick={() => window.location.href='/#/forgot'}>
            Forgot password? Reset here
          </button>
        </div>
      );
    }
	}

	showPassword() {
	  var passBox = document.getElementById("password_box");
    if (passBox.type == "password") {
      passBox.type = "text";
    } else {
      passBox.type = "password";
    }
  }

  login(e) {
    // to prevent SOME browsers rerouting to /?#/
    e.preventDefault();

    var email = document.getElementById("email_box").value;
    var password = document.getElementById("password_box").value;
    var feedback = document.getElementById("feedback");

    store.dispatch(LoginAction(email, password, feedback));
  }
}

export default Account;
