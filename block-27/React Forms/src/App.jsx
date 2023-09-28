import React from "react";
import SignUpForm from "./component/SignUpForm"; // Import your SignUpForm component here
import Authenticate from "./component/Authenticate";

function App() {
  return (
    <div>
      <SignUpForm /> {/* SignUpForm component here */}
      <Authenticate />
    </div>
  );
}

export default App;

