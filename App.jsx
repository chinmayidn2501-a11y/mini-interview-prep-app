import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import ResumeAnalyzer from "./components/ResumeAnalyzer";
import MockInterview from "./components/MockInterview";
import JobPrep from "./components/JobPrep";
import Practice from "./components/Practice";
import JobSuggestions from "./components/JobSuggestions";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <div className="container" style={{ paddingTop: 18 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/resume" element={<ResumeAnalyzer />} />
          <Route path="/mock" element={<MockInterview />} />
          <Route path="/job-prep" element={<JobPrep />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/jobs" element={<JobSuggestions />} />

          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
