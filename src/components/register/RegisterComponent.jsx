import React from 'react';
import loginImg from '../../assets/img/login.svg';

export class RegisterComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Register</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} alt=""/>
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input type="text" name="username" placeholder="User Name"/>
              </div>
              <div className="form-group">
                <label htmlFor="displayname">Display Name</label>
                <input type="text" name="displayname" placeholder="Display Name"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email"/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password"/>
              </div>
              <div className="form-group">
                <label htmlFor="rpassword">Repeat Password</label>
                <input type="password" name="rpassword" placeholder="Repeat Password"/>
              </div>
              <div className="form-group">
                <button type="button" className="btn">Register</button>
              </div>
            </div>
          </div>
        </div>
      );
  }
} 