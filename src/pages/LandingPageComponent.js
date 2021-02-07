import React from 'react';
import Auth from '../security/Auth';

class LandingPageComponent extends React.Component {

  constructor(props) {
    super(props); 

    this.login = this.login.bind(this);
  }

  login() {
    Auth.logout(() => {
      this.props.history.push("/login");
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Landing</h1>
        <button type="button" className="btn" onClick={
          this.login
        }>Login</button>
      </div>
    );
  }
}

export default LandingPageComponent;