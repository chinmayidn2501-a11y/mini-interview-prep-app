import React, { useState } from "react";

export default function MockInterview() {
  const bank = [
    "Tell me about yourself.",
    "Explain your biggest project.",
    "Why should we hire you?",
    "What is your greatest strength?",
    "What is your weakness?"
  ];

  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");

  return (
    <div style={{
      maxWidth: "800px",
      margin: "30px auto",
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ textAlign: "center", color: "#2563eb" }}>
        AI Mock Interview
      </h2>

      <p><strong>Question:</strong> {bank[index]}</p>

      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        rows={6}
        placeholder="Type your answer..."
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "10px",
          borderRadius: "8px",
          border: "1px solid #e5e7eb",
          fontSize: 14
        }}
      />

      <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
        <button
          onClick={() => {
            // simple "submit" behaviour: advance and clear
            setIndex(i => (i + 1 < bank.length ? i + 1 : 0));
            setAnswer("");
          }}
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "10px 16px",
            borderRadius: 8,
            cursor: "pointer"
          }}
        >
          Next
        </button>

        <button
          onClick={() => {
            // optional: save current answer to localStorage (very simple)
            const saved = JSON.parse(localStorage.getItem("mockAnswers") || "[]");
            saved.unshift({ question: bank[index], answer, date: new Date().toISOString() });
            localStorage.setItem("mockAnswers", JSON.stringify(saved));
            alert("Answer saved to local storage (demo).");
          }}
          style={{
            background: "#10b981",
            color: "#fff",
            border: "none",
            padding: "10px 16px",
            borderRadius: 8,
            cursor: "pointer"
          }}
        >
          Save Answer
        </button>
      </div>
    </div>
  );
}
