import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { LoginComponent, RegisterComponent } from './components';
import LandingPageComponent from './components/LandingPageComponent';
import UserComponent from './components/UserComponent';
import { ProtectedRoute } from './security/ProtectedRouter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  /*componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }*/

  render() {
    return (
      <Switch>
      <>
        <>
          <ProtectedRoute exact path="/home" component={UserComponent} />
        </>
        <div className="App">
          <Route exact path="/" component={LandingPageComponent} />
          <Route exact path="/login" component={LoginComponent} />
        </div>
      </>
      </Switch>
    );
  }

  /*render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <LoginComponent containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <RegisterComponent containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}*/

/*const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};*/
}
export default App;
