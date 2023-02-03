import { DashboardNavbar } from "@/components/dashboard-navbar";
import { AreaType, useApi } from "@/lib/api";
import { Container } from "@mui/material";
import Head from "next/head";
import { PropsWithChildren } from "react";

export interface DashboardProps {}

const Dashboard = ({ children }: PropsWithChildren<DashboardProps>) => {
  const { user } = useApi({ area: AreaType.Authenticated });

  return (
    <>
      <Head>
        <title>Leonflix</title>
        <meta name="description" content="Leonfix" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <DashboardNavbar user={user}></DashboardNavbar>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export { Dashboard };
