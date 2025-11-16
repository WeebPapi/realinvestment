"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type AuthStatus = {
  isAuthenticated: boolean;
  user: {
    name: string;
    email: string;
    nationalIdUrl?: string;
  } | null;
};

type MockAuthPayload = {
  name?: string;
  email: string;
  password: string;
  nationalIdFile?: File;
};

type AuthContextValue = AuthStatus & {
  login: (payload: MockAuthPayload) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const mockDelay = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

export function AuthProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>({
    isAuthenticated: false,
    user: null,
  });

  const login = useCallback(async (payload: MockAuthPayload) => {
    await mockDelay(600);

    let nationalIdUrl: string | undefined;

    if (payload.nationalIdFile) {
      nationalIdUrl = URL.createObjectURL(payload.nationalIdFile);
    }

    setStatus({
      isAuthenticated: true,
      user: {
        name: payload.name ?? "Real Investor",
        email: payload.email,
        nationalIdUrl,
      },
    });
  }, []);

  const logout = useCallback(() => {
    setStatus({ isAuthenticated: false, user: null });
  }, []);

  const value = useMemo(
    () => ({
      ...status,
      login,
      logout,
    }),
    [status, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

