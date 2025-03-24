import useAuth from "@/hooks/auth/useAuth";
import { Routes } from "@/lib/routes";
import { isAuthenticated as checkAuthentication } from "@/utils/auth";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  redirectPath?: string;
}

export function ProtectedRoute({
  redirectPath = Routes.LOGIN,
}: ProtectedRouteProps) {
  const { cookies, isLoading } = useAuth();
  const [isValidating, setIsValidating] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const validateAuth = async () => {
      // Check if token and id exist in cookies
      if (!cookies.token || !cookies.id) {
        setIsAuthenticated(false);
        setIsValidating(false);
        return;
      }

      try {
        // Use the utility function to check token validity
        const valid = await checkAuthentication(cookies);
        setIsAuthenticated(valid);
      } catch (error) {
        console.error("Authentication error:", error);
        setIsAuthenticated(false);
      } finally {
        setIsValidating(false);
      }
    };

    validateAuth();
  }, [cookies]);

  // Show nothing while validating
  if (isValidating || isLoading) {
    return null; // Or a loading spinner component
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  // If authenticated, render the protected route
  return <Outlet />;
}
