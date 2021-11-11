import {Map} from './Map';
import React from 'react';

const PAGES = {
  map: <Map/>
}

export class Registration extends React.Component {
  state = {currentPage: "map"};
  navigateTo = (page) => {
    this.setState({currentPage: page})
  };

  render(){
    return <>
      <header>
        <nav>          
            <li>
              <button onClick={() => {
                this.navigateTo("map")
              }}>
                Registration
              </button>
            </li>          
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

const reg = new Registration();
export default reg;