import React, { Component } from 'react';
import Card from './Card.js'

import './App.css';

class App extends Component {
 
  render() {
    return (
      <div>
        <h2 className='title'>To Do Box</h2>
        <input type='text' name='title-input' placeholder='Idea Title' />
        <input type='text' name='body-input' placeholder='Idea Body' />
        <button>Submit</button>
        <div>
          <Card ideaContents={Card} />
        </div>
      </div>
    );
  }
}

export default App;
