import React from 'react';
import loginImg from '../../assets/img/login.svg';
import Auth from '../../security/Auth';

class LoginComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    if(this.state.username && this.state.password) {
      Auth.login(() => {
        this.props.history.push("/home");
      });
    } else {
      Auth.logout(() => { 
        this.props.history.push("/login");
      });
    }

    event.preventDefault();
  }

  handleNameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePassChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
      return (
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Login</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} alt=""/>
            </div>
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" 
                  value={this.state.username} onChange={this.handleNameChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password"
                  value={this.state.password} onChange={this.handlePassChange}/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn">Login</button>
              </div>
            </form>
          </div>
        </div>
      );
  }
} 
export default LoginComponent