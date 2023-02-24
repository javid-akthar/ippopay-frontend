import React from "react";

function ProblemStatement(props) {
  let problemStatementStyle = {
    width: "80%",
    border: "2px solid black",
    margin: "auto",
    padding: "5px",
    borderRadius: "5px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  };
  return (<div style={problemStatementStyle}>
    <p>A password is considered strong if the below conditions are all met:</p>
    <ul>
        <li>It has at least 6 characters and at most 20 characters.</li>
        <li>It contains at least one lowercase letter, at least one uppercase letter, and at least one digit.</li>
        <li>It does not contain three repeating characters in a row (i.e., "Baaabb0" is weak, but "Baaba0" is strong).</li>
    </ul>
    <br></br>
    <p>
    Given a string password, return the minimum number of steps required to make password strong. if password is already strong, return 0.
    </p>
    <p>In one step, we can:</p>
    <ul>
        <li>Insert one character to password,</li>
        <li>Delete one character from password, or</li>
        <li>Replace one character of password with another character.</li>
    </ul>
    <h4>The valid input is a String without any white spaces or new line</h4>
    
  </div>);
}

export default ProblemStatement;
