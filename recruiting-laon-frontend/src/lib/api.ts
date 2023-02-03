import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import { MediaTitle, MediaType } from "./types";
import axios from "./axios";

export interface User {
  name: string;
  email: string;
  emailVerifiedAt?: Date;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface RegisterUser extends LoginUser {
  name: string;
  confirmPassword: string;
}

export interface ApiHooks {
  user?: User;
  login: (formData: LoginUser) => Promise<void>;
  logout: () => Promise<void>;
  register: (formData: RegisterUser) => Promise<void>;
}

export enum AreaType {
  Public,
  Authenticated,
}

export interface UseApiProps {
  area: AreaType;
  redirectIfAuthenticated?: string;
}

export class FormError extends Error {
  constructor(public errors: string[]) {
    super();
  }
}

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const csrf = () => axios.get("/sanctum/csrf-cookie");

export function useApi({
  area,
  redirectIfAuthenticated,
}: UseApiProps): ApiHooks {
  const router = useRouter();
  const {
    data: user,
    error,
    mutate,
  } = useSWR<User>("/user", (url) =>
    fetcher(url).catch((err) => {
      if (err.response.status !== 409) throw err;
      router.push("/verify-email");
    })
  );

  const login = async (formData: LoginUser) => {
    await csrf();
    try {
      await axios.post("/login", formData);
      mutate();
    } catch (err: any) {
      if (err?.response?.status !== 422) throw err;
      throw new FormError(err?.response?.data?.errors);
    }
  };

  const register = async (formData: RegisterUser) => {
    await csrf();

    try {
      await axios.post("/user", formData);
    } catch (err: any) {
      if (err?.response?.status !== 422) throw err;
      throw new FormError(err?.response?.data?.errors);
    }
  };

  const logout = useCallback(async () => {
    if (!error) {
      await fetcher("/logout");
      mutate();
    }
    // forcing the browser to go to login page outside the scope of react forcing
    // a full page load
    window.location.pathname = "/login";
  }, [error, mutate]);

  useEffect(() => {
    if (redirectIfAuthenticated) {
      if (area === AreaType.Public && user) {
        router.push(redirectIfAuthenticated);
      }

      if (
        window.location.pathname === "/verify-email" &&
        user?.emailVerifiedAt
      ) {
        router.push(redirectIfAuthenticated);
      }
    }

    if (area === AreaType.Authenticated && error) {
      console.log("unauthorized as not logged in");
      logout();
    }
  }, [user, error, area, redirectIfAuthenticated, router, logout]);

  return {
    user,
    login,
    logout,
    register,
  };
}

export const useDashboard = () => {
  const { data: content = [] } = useSWR<MediaTitle[]>("/media-title");
  const { data: mediaTypes = [] } = useSWR<MediaType[]>("/media-type");
  console.log("dash data:", content, mediaTypes);
  return {
    content,
    mediaTypes,
  };
};

export const useMedia = (mediaId?: string) => {
  const {
    data: media,
    error,
    isLoading,
    mutate,
  } = useSWR<MediaTitle>(mediaId && "/media-title/" + mediaId);

  return {
    media,
    error,
    isLoading,
  };
};
