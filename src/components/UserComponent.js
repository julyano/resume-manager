import React from 'react';
import auth from '../security/Auth';
import UserService from '../services/UserService';

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    UserService.getUsers()
      .then((response) => {
        this.setState({users: response.data});
      })
      .catch((error) => {
        console.log('erro ', error);
      });
  }

  findUser() {
    UserService.getOneUser(1)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Users List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Name</td>
              <td>Display Name</td>
              <td>Email</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.users.map(
                user => 
                <tr key = { user.id }>
                  <td>{ user.username }</td>
                  <td>{ user.displayname }</td>
                  <td>{ user.email }</td>
                  <td>{ user.status }</td>
                </tr>
              )
            }
          </tbody>
        </table>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={this.findUser}
        >
          Search
        </button>
        <button type="button" className="btn" onClick={
                  () => {
                    auth.logout(() => {
                      this.props.history.push("/");
                    });
                  }
                }>Logout</button>
      </div>
    );
  }
}

export default UserComponent;