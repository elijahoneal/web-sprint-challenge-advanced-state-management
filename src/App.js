import React, { Component } from "react";
import { connect } from 'react-redux'
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import{ fetchSmurfs }from './actions/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  
  render() {

    const handleFetchSmurf = e => {
      e.preventDefault();
      this.props.fetchSmurfs();
    }
    return (
      <div className="App">
        <Header />
     
        <main onLoad = {handleFetchSmurf}>
        {this.props.isLoading ? <h3>Looking for Smurfs</h3> :
        <SmurfList/>}
          
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error
  }
  

}

export default connect(mapStateToProps, { fetchSmurfs }) (App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.