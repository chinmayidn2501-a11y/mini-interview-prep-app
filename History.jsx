import React from "react";

export default function History() {
  const sessions = JSON.parse(localStorage.getItem("jobPrepSessions") || "[]");
  return (
    <div className="card">
      <h1>History</h1>
      {sessions.length === 0 ? <p>No saved sessions yet.</p> : (
        <ul>
          {sessions.map((s, i) => (
            <li key={i}>{new Date(s.date).toLocaleString()} — {s.role} ({s.qCount || s.questionsAsked || 0} questions)</li>
          ))}
        </ul>
      )}
    </div>
  );
}
