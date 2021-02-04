import React from 'react';
import loginImg from '../../assets/img/login.svg';

export class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Login</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} alt=""/>
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username"/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password"/>
              </div>
              <div className="form-group">
                <button type="button" className="btn">Login</button>
              </div>
            </div>
          </div>
        </div>
      );
  }
} 