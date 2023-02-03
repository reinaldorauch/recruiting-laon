import { PropsWithChildren, ReactNode } from "react";
import Head from "next/head";
import { Container } from "@mui/material";
import { PublicNavbar } from "@/components/public-navbar";

export interface PublicProps {
  alternativeAction: ReactNode;
}

const Public = ({
  children,
  alternativeAction,
}: PropsWithChildren<PublicProps>) => (
  <>
    <Head>
      <title>Leonflix</title>
      <meta name="description" content="Leonfix" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <PublicNavbar alternativeAction={alternativeAction}></PublicNavbar>
      <Container maxWidth="sm">{children}</Container>
    </main>
  </>
);

export { Public };
