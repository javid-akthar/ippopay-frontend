import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ProblemStatement from "./ProblemStatement";
import ResultTable from "./ResultTable";
import "./home.css";

function Home(props) {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [passwordRectificationCount, setPasswordRectificationCount] =
    useState("");
  const [DBdata, setDBdata] = useState([]);
  const url = "http://ec2-15-206-165-96.ap-south-1.compute.amazonaws.com:3011/";

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(url + "api/v1/strong-password/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setDBdata(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  let inputArea = {
    width: "400px",
    display: "inline-block",
  };
  let buttonStyle = {
    display: "inline-block",
    height: "39px",
    alignSelf: "center",
  };
  let flexContainer = {
    display: "flex",
    margin: "auto",
    width: "80%",
    justifyContent: "space-around",
    // position: "sticky",
    // top: "10px"
  };
  let val = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  let execute = () => {
    try {
      if (inputValue.indexOf(" ") != -1) {
        setPasswordRectificationCount(
          "please give valid input, The valid input is a String without any white spaces or new line"
        );
        return;
      } else if (inputValue.indexOf("\n") != -1) {
        setPasswordRectificationCount(
          "please give valid input, The valid input is a String without any white spaces or new line"
        );
        return;
      } else if (inputValue.length <= 0) {
        setPasswordRectificationCount(
          "please give valid input, The valid input is a String without any white spaces or new line"
        );
        return;
      } else {
        setPasswordRectificationCount("");
      }
      // console.log('tab index',inputValue.indexOf('\t'));
      console.log("inputValue", inputValue);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let payload = JSON.stringify({
        payload: inputValue,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: payload,
        redirect: "follow",
      };

      fetch(url + "api/v1/strong-password/validate", requestOptions)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setPasswordRectificationCount(response.count);
          setDBdata(response.data);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      <br></br>
      <ProblemStatement />
      {console.log("home componenet")}
      <br></br>
      <br></br>
      <h3>{message}</h3>
      <div style={flexContainer}>
        <div>
          <h4 style={{ textAlign: "center" }}>Input</h4>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            style={inputArea}
            onChange={val}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          style={buttonStyle}
          onClick={execute}
        >
          {" "}
          Run{" "}
        </button>
        <div>
          <h4 style={{ textAlign: "center" }}>Output</h4>
          <textarea
            className="form-control"
            rows="3"
            style={inputArea}
            defaultValue={passwordRectificationCount}
            readOnly
          ></textarea>
        </div>
      </div>
      <br></br>
      <br></br>
      <ResultTable DBdata={DBdata} />
    </>
  );
}

export default Home;
