import React, { Component } from 'react';
import Button from './Button';
import CSS from './App.css'
class App extends Component {
  constructor(){
   super()
    this.state= {
      category: '', 
      value: ''

    }
  }
  // handleClick = () => {
  //   axios.get('http://jservice.io/api/random')
  //   .then(res => setData(res.data.data.images.original.url))
  //   .catch(err => console.log(err))
 
  // }
  

  handleClick = () => {
    console.log('clicked')
    fetch('http://jservice.io/api/random').then((response)=>{return response.json()
    //.catch to catch errors
  }).then((data)=>console.log(data)).catch((error)=>console.log(error))
  } 
 

  render() {
    return (
      <div>
        <h1>Welcome to Jeopardy!</h1>
        <h2>Score: 800</h2>
        <button id="decrease" type="button">Decrease</button>
        <button id="increase" type="button">Increase</button>
        <button id="reset" type="button">Reset</button>
        <h2>Let's Play !</h2>
        <button type="button" onClick={this.handleClick}>Get Question</button>
        <h2>Category:</h2>
        <h2>Points: </h2>
        <h2>Answer:</h2>
        {/* <p>Launched on April 12, 1981, this Space Shuttle was the first reusable manned spacecraft</p> */}
        <button id="reveal" type="button">Click to Reveal Question</button>

      </div>
    )
  }
}


export default App;  