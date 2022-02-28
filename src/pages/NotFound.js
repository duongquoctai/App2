import React from "react";
import MainText from "components/MainText"


const Login = () => (
  <div style={{
    display: "grid",
    placeItems: "center",
    marginTop: "20%"
  }} >
    <MainText text='404 Page Not Found' />
    <h3 style={{ fontWeight: 'lighter', color: "#34495e" }}>Head back to <a href="/upload">Upload page</a></h3>
  </div>
);

export default Login;