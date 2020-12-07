import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    this.props.addItem();
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };



// just destructure in connect

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem());
//     }
//   }
// }

// export default connect(mapStateToProps, {addItem})(App);

// destructure the state to props 
// refer to readme to see how you can omit the dispatch in connect and still get dispatch function 
export default connect(s => {items: s.items}), {addItem}(App);
