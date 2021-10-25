import './App.css';
import {Home} from './Home';
import {Profile} from './Profile';
import {Registration} from './Registration';
import React from 'react';

const PAGES = {
  home: <Home/>,
  registration: <Registration/>,
  profile: <Profile/>
}

class App extends React.Component {
  state = {currentPage: "home"};
  navigateTo = (page) => {
    this.setState({currentPage: page})
  };

  render(){
    return <>
      <header>
        <nav>
          <ul>          
            <li>
              <button onClick={() => {
                this.navigateTo("home")
              }}>
                Login
              </button>
            </li>
            
            <li>
              <button onClick={() => {
                this.navigateTo("profile")
              }}>
                Profile
              </button>
              
            </li>
            <li>
              <button onClick={() => {
                this.navigateTo("registration")
              }}>
                Registration
              </button>
              
            </li>
          </ul>
        </nav>  
      </header>
      <main>
        <section>
          {PAGES[this.state.currentPage]}
        </section>
      </main>
    </>
  }
}

export default App;
