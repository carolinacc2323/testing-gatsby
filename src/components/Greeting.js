import React from "react";

const Greeting = ({ name= 'Invitado' }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;