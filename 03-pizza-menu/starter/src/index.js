import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return <h1>Hello React!!!!</h1>;
}
// React v18 - how we render the root in v18
//Strict mode makes makes it so it renders the components twice during development
// it renders twice to find bugs
//It also checks if we are using outdated parts of the react API

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
<<<<<<< HEAD

//this is how we use to render root - React Before v18
//React.render(<App />;)
=======
>>>>>>> 38b82ed7f6c64f62fbce18d096b7a3d79bba4603
