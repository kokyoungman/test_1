import React from "react";

function Test1({ name, value }) {
  console.log(name);
  console.log(value);
  return <h1>테스트1 {name}</h1>;
}

export default Test1;
