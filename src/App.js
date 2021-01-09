import React from 'react'
import Form from './Components/organisms/Form'
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <div className="container" >
          <h1>Ryder's Game</h1>
          <div className="contentForm">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default App
