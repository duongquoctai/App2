import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MainText from "components/MainText";
import { displayTimesOfDay } from "utils";

const Login = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          marginTop: "20%",
        }}
      >
        <MainText text={displayTimesOfDay()} />
        <Button
          color="primary"
          variant="contained"
          component={RouterLink}
          to="/home"
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default Login;
