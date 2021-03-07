import React, { Component } from "react";
import img from "./components/img.png";
import "./App.css";
import NavBar from "./components/NavBar";
//import Home from "./components/Home";
//import Header from "./components/Header";
//import { Button } from "reactstrap";
//import { Button } from "bootstrap";

// buttonHandle() {
//   alert("Hello! I am an alert box!!");
// }

function App() {
  // state = {  }

  return (
    <div>
      <NavBar />
      {/* <Home /> */}
      {/* */}
      {/* */}
      {/* */}
      {/* */}
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <a class="navbar-brand font-weight-bold text-light" href="#">
          Magnetar Solutions
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse pl-5 font-weight-bold text-dark"
          id="navbarNav"
          //style={{padding-left: 50px}}
        >
          <ul class="navbar-nav">
            <li class="nav-item ">
              {/* active */}
              <a class="nav-link pl-5" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item pl-5">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item pl-5">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* */}
      {/* */}
      {/* */}
      {/* */}
      <div class="jumbotron text-center">
        <h1 class="display-4 font-weight-bold">Home</h1>
        <h4 class="">
          <br />
          <br />
          <br />
          <br />
          <br />
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </h4>
        <br />
        <br />
        <br />
        <hr class="my-4" />
        <br />
        <br />
        <br />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <br />
        <br />
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
      {/* */}
      {/* */}
      {/* */}
      {/* */}
      {/* */}
      {/* */}
      <div class="container">
        <div class="row">
          <div class="col-sm">
            {" "}
            <div class="card">
              <img
                class="card-img-top"
                src={img}
                height="300px"
                width="200px"
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            {" "}
            <div class="card">
              <img
                class="card-img-top"
                src={img}
                height="300px"
                width="200px"
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            {" "}
            <div class="card">
              <img
                class="card-img-top"
                src={img}
                height="300px"
                width="200px"
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* */}
      {/* */}
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          {" "}
          <form action="/action_page.php m-5 p-5">
            <div class="form-group">
              <label for="email">Email address:</label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd" />
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <button type="submit" class="btn btn-default">
              Submit
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
      {/* */}
      {/* */}
      {/* */}
      <button
        className="btn-primary m-5 p-3 rounded"
        // onClick={this.buttonHandle}
      >
        Top
      </button>
      {/* */}
      {/* */}
    </div>
  );
}

export default App;

// function App() {
//   const buttonHandle = () => {
//     alert("Hello! I am an alert box!!");
//   };
//   return (
//     <React.Fragment>
//       <button className="btn-primary m-5 p-3 rounded" onClick={buttonHandle}>
//         Button
//       </button>
//       <Home />
//     </React.Fragment>
//   );
// }
// export default App;
