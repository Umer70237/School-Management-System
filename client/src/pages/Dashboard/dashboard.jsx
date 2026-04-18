import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

// ── When backend is ready, replace this with:
// import { getStudents, getFees, getAttendance } from '../api';

export default function Dashboard() {
  const navigate = useNavigate();

  // ── Replace with real API calls when backend is ready ──
  const [stats] = useState({
    totalStudents: 0,
    presentToday: 0,
    feesCollected: 0,
    feesPending: 0,
  });

  // Quick action cards
  const ACTIONS = [
    { icon: '🎓', label: 'Add New Student',    desc: 'Register a student',          path: '/students'   },
    { icon: '📋', label: 'Mark Attendance',    desc: "Take today's attendance",     path: '/attendance' },
    { icon: '💳', label: 'Collect Fee',        desc: 'Record a fee payment',        path: '/fees'       },
    { icon: '📊', label: 'View Fee Report',    desc: 'See who has paid this month', path: '/fees'       },
  ];

  return (
    <div>
      {/* ── Stats ── */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#eef2ff' }}>🎓</div>
          <div className="stat-value">{stats.totalStudents}</div>
          <div className="stat-label">Total Students</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#dcfce7' }}>📋</div>
          <div className="stat-value">{stats.presentToday}</div>
          <div className="stat-label">Present Today</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#dcfce7' }}>✅</div>
          <div className="stat-value">₨ {stats.feesCollected.toLocaleString()}</div>
          <div className="stat-label">Fees Collected</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#fee2e2' }}>⚠️</div>
          <div className="stat-value">{stats.feesPending}</div>
          <div className="stat-label">Fees Pending</div>
        </div>
      </div>

      {/* ── Quick Actions ── */}
      <h2 className="section-title">Quick Actions</h2>
      <div className="actions-grid">
        {ACTIONS.map(a => (
          <button key={a.label} className="action-card" onClick={() => navigate(a.path)}>
            <div className="ac-icon">{a.icon}</div>
            <div className="ac-label">{a.label}</div>
            <div className="ac-desc">{a.desc}</div>
          </button>
        ))}
      </div>

      {/* ── Getting started note ── */}
      <div className="start-note">
        <span>👆</span>
        <p>Start by adding your students, then mark attendance and collect fees daily.</p>
      </div>
    </div>
  );
}
