import React from 'react'
import {Map} from './Map';



export const Home = () => {
    return (
        <form>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" size="28"/>

            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password" size="28"/>

            <button onClick={() => {
                this.navigateTo(<Map/>)
              }}>
                Submit
              </button>
        </form>        
    )
}