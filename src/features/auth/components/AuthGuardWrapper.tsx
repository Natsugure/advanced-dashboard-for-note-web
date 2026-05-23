import { useAuth } from "@clerk/react";
import { Text } from "@mantine/core";
import { Navigate, Outlet } from "react-router";

export function AuthGuardWrapper() {
  const { isSignedIn, isLoaded } = useAuth()

  return (
    <>
      {
        !isLoaded ? <Text>読み込み中</Text> : 
        !isSignedIn ? <Navigate to="/login" /> : 
        <Outlet />
      }
    </>
  )
}
