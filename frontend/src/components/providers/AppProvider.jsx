"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { Toaster } from "@/components/ui/sonner";
import Loader from "@/components/loader";
import { SocketProvider } from "@/context/socketContext";
import { apiClient } from "@/lib/api-client";
import { useAppStore } from "@/store";
import { GET_USER_INFO } from "@/utils/constant";

const PUBLIC_ROUTES = new Set(["/auth"]);

const FullPageLoader = () => (
  <div className="flex flex-col h-screen w-screen items-center justify-center bg-[#1c1d25]">
    <Loader />
  </div>
);

export default function AppProvider({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const { userInfo, setUserInfo } = useAppStore();
  const [loading, setLoading] = useState(true);

  const isPublicRoute = useMemo(() => PUBLIC_ROUTES.has(pathname), [pathname]);

  useEffect(() => {
    let mounted = true;

    const getUserData = async () => {
      try {
        const response = await apiClient.get(GET_USER_INFO, {
          withCredentials: true,
        });

        if (mounted && response.status === 200 && response.data?.id) {
          setUserInfo(response.data);
        } else if (mounted) {
          setUserInfo(undefined);
        }
      } catch (error) {
        if (
          error instanceof AxiosError &&
          [401, 403, 404].includes(error.response?.status)
        ) {
          setUserInfo(undefined);
        } else {
          console.error("Error fetching user info:", error);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    getUserData();

    return () => {
      mounted = false;
    };
  }, [setUserInfo]);

  useEffect(() => {
    if (loading) return;

    if (pathname === "/") {
      router.replace(userInfo ? "/chat" : "/auth");
      return;
    }

    if (userInfo && pathname === "/auth") {
      router.replace("/chat");
      return;
    }

    if (!userInfo && !isPublicRoute) {
      router.replace("/auth");
    }
  }, [isPublicRoute, loading, pathname, router, userInfo]);

  const isRedirecting =
    pathname === "/" ||
    (userInfo && pathname === "/auth") ||
    (!userInfo && !isPublicRoute);

  if (loading || isRedirecting) {
    return <FullPageLoader />;
  }

  return (
    <SocketProvider>
      {children}
      <Toaster closeButton />
    </SocketProvider>
  );
}
