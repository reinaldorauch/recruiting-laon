import { Public } from "@/layouts/public";
import { AreaType, RegisterUser, useApi } from "@/lib/api";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent } from "react";

const Signup = () => {
  const { register } = useApi({ area: AreaType.Public });

  const state: RegisterUser = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = () => {
    console.log("Submitting");
    register(state);
  };

  const onFieldChange =
    (fieldName: keyof RegisterUser) => (e: ChangeEvent<HTMLInputElement>) => {
      state[fieldName] = e.target.value;
    };

  return (
    <Public
      alternativeAction={
        <Button variant="outlined" href="/login">
          Entrar
        </Button>
      }
    >
      <form onSubmit={onSubmit}>
        <Stack spacing={2} padding="64px 102px">
          <Typography variant="h6" fontWeight="bold">
            Cadastre-se
          </Typography>
          <Typography>Acompanhe os melhores filmes e s&eacute;ries</Typography>
          <TextField
            id="name"
            name="name"
            label="Nome"
            onChange={onFieldChange("name")}
          ></TextField>
          <TextField
            id="email"
            label="Email"
            type="email"
            onChange={onFieldChange("email")}
          ></TextField>
          <TextField
            id="password"
            type="password"
            label="Senha"
            onChange={onFieldChange("password")}
          ></TextField>
          <TextField
            id="confirmPassword"
            type="password"
            label="Confirmar a senha"
            onChange={onFieldChange("confirmPassword")}
          ></TextField>
          <Button variant="contained" onClick={onSubmit}>
            Cadastrar
          </Button>
        </Stack>
      </form>
    </Public>
  );
};
export default Signup;
