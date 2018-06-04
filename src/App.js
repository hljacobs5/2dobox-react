import React, { Component } from 'react';
import logo from './logo.svg';
import Idea from './Idea.js';

import './App.css';

class App extends Component {
 
  render() {
    return (
      <div>
        <h2 className='title'>To Do Box</h2>
        <input type='text' name='title-input' placeholder='Idea Title' />
        <input type='text' name='body-input' placeholder='Idea Body' />
        <button>Submit</button>
        <Idea ideaContents={idea.ideaContents} />
      </div>
    );
  }
}

export default App;
