import React from "react";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Main from "./main";
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    )
  }
}