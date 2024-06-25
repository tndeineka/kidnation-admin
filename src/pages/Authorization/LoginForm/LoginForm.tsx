import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import logo from "@/assets/images/logo.png";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.logoImg} src={logo} alt="kid nation logo" />
        <p className={styles.text}>Login</p>

        <form className={styles.form}>
          <TextField
            className={styles.input}
            variant="outlined"
            label="Email"
            placeholder="Your email adress"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#eff1f999",
              },
            }}
          />
          <TextField
            className={styles.input}
            variant="outlined"
            label="Password"
            placeholder="Your password"
            type={showPassword ? "text" : "password"}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#eff1f999",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <div
                    className={styles.passwordIcon}
                    onClick={handlePasswordVisibility}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </div>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              height: "58px",
              borderRadius: "12px",
              textTransform: "capitalize",
            }}
          >
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
