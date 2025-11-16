
import React, { useState } from "react";

export default function JobPrep() {
  const roles = {
    "Backend Engineer": [
      "Explain how you would design a REST API",
      "How do you scale databases?",
      "Explain multithreading & async in backend"
    ],
    "Frontend Engineer": [
      "How would you optimize React rendering?",
      "Explain virtual DOM",
      "How do you improve core web vitals?"
    ],
    "Data Scientist": [
      "Explain overfitting",
      "What is feature engineering?",
      "How do you evaluate ML models?"
    ]
  };

  const [role, setRole] = useState("Backend Engineer");
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");

  const questions = roles[role];

  return (
    <div style={{
      maxWidth: "800px",
      margin: "30px auto",
      padding: "20px",
      borderRadius: "12px",
      background: "white",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#2563eb" }}>
        Job-Specific Interview Prep
      </h2>

      <label>Choose Role:</label>
      <select 
        value={role}
        onChange={(e) => { setRole(e.target.value); setIndex(0); }}
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      >
        {Object.keys(roles).map((r) => (
          <option key={r}>{r}</option>
        ))}
      </select>

      <div style={{
        padding: "15px",
        background: "#f3f4f6",
        borderRadius: "10px",
        marginTop: "15px"
      }}>
        <h3>Question {index + 1}/{questions.length}</h3>
        <p>{questions[index]}</p>

        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Write your answer here..."
          rows={5}
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "10px",
            borderRadius: "8px"
          }}
        />

        <button 
          onClick={() => {
            setIndex((prev) => (prev + 1 < questions.length ? prev + 1 : 0));
            setAnswer("");
          }}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px"
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
