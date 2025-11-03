import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Replace with your AWS ALB DNS name
    fetch("http://<YOUR-ALB-DNS-NAME>/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error fetching data"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>🚀 Full Stack App on AWS</h1>
      <h3>Frontend Connected to Load Balanced Backend</h3>
      <p>Response: {message}</p>
    </div>
  );
}

export default App;
