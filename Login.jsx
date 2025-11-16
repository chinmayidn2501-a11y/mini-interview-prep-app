import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    localStorage.setItem("mi_user", JSON.stringify({ email }));
    navigate("/");
  }

  return (
    <div className="card">
      <h1>Login (demo)</h1>
      <form onSubmit={submit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" style={{ padding: 8, width: "100%", marginBottom: 8 }} />
        <button type="submit" style={{ padding: "8px 12px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 8 }}>Login</button>
      </form>
    </div>
  );
}
