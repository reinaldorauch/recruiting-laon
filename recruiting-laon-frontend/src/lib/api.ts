import { useState } from "react";

export interface User {
  email: string;
}

export interface ApiHooks {
  user?: User;
}

export function useApi(): ApiHooks {
  const [user, setUser] = useState<User | undefined>();
  const [token, setToken] = useState<string | undefined>();

  return {
    user,
  };
}
