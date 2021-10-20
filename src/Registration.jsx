import {Map} from './Map';
import React from 'react';
import {About} from './About';

const PAGES = {
  map: <Map/>,
  about: <About/>
}

export class Registration extends React.Component {
  state = {currentPage: "about"};
  navigateTo = (page) => {
    this.setState({currentPage: page})
  };

  render(){
    return <>      
      <nav>    
        <button onClick={() => {
          this.navigateTo("map")
        }}>
          Submit
        </button>    
      </nav>      
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