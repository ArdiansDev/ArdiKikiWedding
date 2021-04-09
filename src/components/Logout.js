import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "./AuthContext";
import { useHistory } from "react-router-dom";

export default function Logout() {
  const [setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    // setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <div>
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
