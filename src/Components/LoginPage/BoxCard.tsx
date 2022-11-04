import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

function BoxCard() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const [{ username, password }, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [dataOne, setDataOne] = useState("");
  const [dataTwo, setDataTwo] = useState("");
  const navigate = useNavigate();

  function handleToggle() {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  }

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/d7483fe5-c23a-4f61-8219-529abbbeb48d")
      .then((response) => {
        setDataOne(response.data.login.username);
        setDataTwo(response.data.login.password);
      });
  }, []);

  function login(event: React.FormEvent) {
    event.preventDefault();
    if (username === dataOne && password === dataTwo) {
      navigate("/dashboard");
    } else {
      alert("Username o password errate");
    }
  }

  return (
    <div className="container-card">
      <Card className="card-style" variant="outlined">
        <form onSubmit={login}>
          <CardContent className="card-content">
            <TextField
              value={username}
              onChange={(event) =>
                setCredentials({
                  username: event.target.value,
                  password,
                })
              }
              placeholder="Username"
              variant="outlined"
              type="text"
              required
            />
            <TextField
              style={{ position: "relative" }}
              value={password}
              onChange={(event) =>
                setCredentials({
                  username,
                  password: event.target.value,
                })
              }
              placeholder="Password"
              variant="outlined"
              type={type}
              required
            />
            <span onClick={handleToggle}>
              <Icon icon={icon} className="password-toogle-icon" />
            </span>
            <Button variant="outlined" type="submit">
              Conferma
            </Button>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}

export default BoxCard;
