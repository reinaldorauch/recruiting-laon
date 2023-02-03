import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { Logo } from "./logo";
import { ArrowBack } from "@mui/icons-material";
import { ReactNode } from "react";

export interface PublicNavbarProps {
  alternativeAction?: ReactNode;
}

const PublicNavbar = ({ alternativeAction }: PublicNavbarProps) => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar style={{ display: "flex" }}>
          <Button variant="outlined" startIcon={<ArrowBack />} href="/">
            Voltar
          </Button>
          <Logo></Logo>
          {alternativeAction}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { PublicNavbar };
