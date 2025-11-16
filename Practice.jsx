import React from "react";

export default function Practice() {
  return (
    <div style={{
      maxWidth: "800px",
      margin: "30px auto",
      padding: "20px",
      background: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ textAlign: "center", color: "#2563eb" }}>Practice Section</h2>

      <ul style={{ marginTop: "20px", fontSize: "18px", lineHeight: "30px" }}>
        <li>✔ HR Questions</li>
        <li>✔ Behavioral Questions</li>
        <li>✔ Technical MCQs</li>
        <li>✔ Communication Exercises</li>
        <li>✔ Confidence Building Prompts</li>
      </ul>
    </div>
  );
}
