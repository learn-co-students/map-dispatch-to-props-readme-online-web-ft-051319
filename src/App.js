import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick = event => {
    this.props.addItem();
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };

export default connect(mapStateToProps, { addItem })(App);
/* ES6 shorthand lets us pass in *one* value that will be read as the key and value */
// If we pass in a function, `mapDispatchToProps()`, we must
// incorporate `dispatch`. If we pass in an object, `connect` handles this for us!

// By default mapDispatchToProps is just dispatch => ({ dispatch }). So if you
// don't specify the second argument to connect(), you'll get dispatch injected as
// a prop in your component.
// and use `this.props.dispatch({ type: 'INCREASE_COUNT' })`