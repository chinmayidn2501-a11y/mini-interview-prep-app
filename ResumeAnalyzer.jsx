import React, { useState } from 'react';

export default function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [role, setRole] = useState('Backend Engineer');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!file) return alert('Please upload a PDF');

    setLoading(true);
    const form = new FormData();
    form.append('resume', file);
    form.append('role_target', role);

    try {
      const res = await fetch("http://localhost:4000/api/resumes/upload", { method: 'POST', body: form });

      const data = await res.json();
      setResult(data.analysis);
    } catch (err) {
      setResult({ error: err.message || 'Network error' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', paddingTop: 40 }}>
      <h1>Resume Analyzer</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: 'grid', gap: 12, marginTop: 20 }}
      >
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Target Role"
          style={{ padding: 8 }}
        />

        <button
          type="submit"
          style={{
            background: '#2563eb',
            color: 'white',
            padding: '10px 16px',
            borderRadius: 6,
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {loading ? 'Analyzing…' : 'Analyze Resume'}
        </button>
      </form>

      {result && (
        <div
          style={{
            marginTop: 25,
            border: '1px solid #ddd',
            borderRadius: 6,
            padding: 12
          }}
        >
          <h3>Score: {result.score}</h3>

          <h4>Improvements</h4>
          <ul>
            {result.improvements?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h4>Tailored Bullets</h4>
          <ul>
            {result.tailored_bullets?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h4>Keywords</h4>
          <p>{result.keywords?.join(', ')}</p>
        </div>
      )}
    </div>
  );
}
