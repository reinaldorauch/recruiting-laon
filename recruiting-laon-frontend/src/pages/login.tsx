import { Public } from "@/layouts/public";
import { AreaType, LoginUser, useApi } from "@/lib/api";
import { Box, Button, TextField, Typography } from "@mui/material";
import { ChangeEvent } from "react";

const Login = () => {
  const { login } = useApi({ area: AreaType.Public });

  const state: LoginUser = {
    email: "",
    password: "",
  };

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    state.email = e.target.value;
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    state.password = e.target.value;
  };

  const onSubmit = () => {
    login(state);
  };

  return (
    <Public
      alternativeAction={
        <Button variant="outlined" href="/signup">
          Cadastrar
        </Button>
      }
    >
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          padding: "80px 102px 80px 102px",
        }}
      >
        <Typography variant="h5" fontWeight="800">
          Entrar
        </Typography>
        <Typography>Bem vindo(a) de volta!</Typography>
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          value={state.email}
          onChange={onEmailChange}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          value={state.password}
          onChange={onPasswordChange}
        />
        <Button variant="contained" onClick={onSubmit}>
          Login
        </Button>
      </Box>
    </Public>
  );
};

export default Login;
