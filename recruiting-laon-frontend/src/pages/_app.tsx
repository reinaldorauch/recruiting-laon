import { fetcher } from "@/lib/api";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { CssBaseline } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <CssBaseline></CssBaseline>
      <Component {...pageProps} />
    </SWRConfig>
  );
}
