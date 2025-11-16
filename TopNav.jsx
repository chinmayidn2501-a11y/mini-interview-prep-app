import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function TopNav() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("mi_user") || "null");

  function handleLogout() {
    localStorage.removeItem("mi_user");
    navigate("/login");
  }

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 14, background: "linear-gradient(90deg,#eef2ff,#ecfeff)", borderBottom: "1px solid #e6eef8" }}>
      <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: "linear-gradient(135deg,#7c3aed,#06b6d4)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>IP</div>
          <div style={{ fontWeight: 700, fontSize: 18 }}>InterviewPrepAI</div>
        </div>

        <Link to="/dashboard" style={{ textDecoration: "none", color: "#0f172a" }}>Dashboard</Link>
        <Link to="/resume" style={{ textDecoration: "none", color: "#0f172a" }}>Resume Analyzer</Link>
        <Link to="/mock" style={{ textDecoration: "none", color: "#0f172a" }}>Mock Interview</Link>
        <Link to="/job-prep" style={{ textDecoration: "none", color: "#0f172a" }}>Job Prep</Link>
        <Link to="/practice" style={{ textDecoration: "none", color: "#0f172a" }}>Practice</Link>
        <Link to="/jobs" style={{ textDecoration: "none", color: "#0f172a" }}>Job Suggestions</Link>
        <Link to="/history" style={{ textDecoration: "none", color: "#0f172a" }}>History</Link>
      </div>

      <div>
        {user ? (
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ fontSize: 14, color: "#0f172a" }}>{user.email}</div>
            <button onClick={handleLogout} style={{ padding: "6px 10px", borderRadius: 8, background: "#ef4444", color: "#fff", border: "none", cursor: "pointer" }}>
              Logout
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", gap: 8 }}>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
