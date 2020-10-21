import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

function HomeButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }
  const style={
      position:"fixed",
      bottom:15,
      right:0,
      color: "#fff",
      backgroundColor: "#562e0b",  
      borderColor: "#0c110b",
      zIndex:10
    };

  return (
    <button className="btn homebtn animate__animated animate__flash animate__slow animate__infinite" style={style} type="button" onClick={handleClick}>
      Go home
    </button>
  );
}
export default HomeButton;