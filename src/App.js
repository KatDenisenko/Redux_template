import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {add, filter, clear} from './redux/actions/someAction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
function mapStateToProps (state) {
  return {
      some:state.some,
  }
}

function mapDispatchToProps (dispatch) {
  return {
      add: function(e) {
          dispatch(add(e))
      },
      filter:function(number) {
          dispatch(filter(number))
      },
      clear: function() {
          dispatch(clear)
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);

