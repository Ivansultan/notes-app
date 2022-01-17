import React from "react";
import { Link } from "react-router-dom";
// import { AppState } from "./reducer";
// import store from "./store";

function MainPage() {
  return (
    <div>
      <h1>Main Page</h1>
      <Link to={`/main`}>
        <p>Edit note</p>
      </Link>
    </div>
  );
}

export default MainPage;
