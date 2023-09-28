import React, { useState } from "react";

export default function SignUpForm() {
  // Create state variables for form inputs
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);

  // Define a non-async function handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Hello 👋"); // Log a message
    // You can add any synchronous logic here
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}> 
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


 