
import React, { Component } from 'react';

export class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

    increment() {
      console.log('blub'); // bpLabel: react_Counter_increment
      const newval = this.state.count + 1 ;
      this.setState({ count: newval });
    }

    render() {
      return (
        <div className="shopping-list">
          Click count = {this.state.count};
          <div>
            <button id="incrementBtn" onClick={ () => this.increment() } >Increment</button>
          </div>
        </div>
      );
    }
  }

