import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './Layout.css';

const NAV = [
  { path: '/',           label: 'Dashboard', icon: '🏠' },
  { path: '/students',   label: 'Students',  icon: '🎓' },
  { path: '/attendance', label: 'Attendance',icon: '📋' },
  { path: '/fees',       label: 'Fees',      icon: '💳' },
  { path: '/records',    label: 'Records',   icon: '📊' },
];

const PAGE_TITLES = {
  '/':           { title: 'Dashboard',  sub: 'Welcome back, Admin' },
  '/students':   { title: 'Students',   sub: 'Add and manage students' },
  '/attendance': { title: 'Attendance', sub: 'Mark daily attendance' },
  '/fees':       { title: 'Fees',       sub: 'Collect and track fees' },
  '/records':    { title: 'Records',    sub: 'Attendance & fee history' },
};

export default function Layout() {
  const { pathname } = useLocation();
  const info = PAGE_TITLES[pathname] || PAGE_TITLES['/'];

  return (
    <div className="app">
      {/* ── Sidebar ── */}
      <aside className="sidebar">
        <div className="sb-brand">
          <div className="sb-icon">🏫</div>
          <div>
            <h2>SchoolHub</h2>
            <p>Management System</p>
          </div>
        </div>

        <nav className="sb-nav">
          {NAV.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="sb-user">
          <div className="user-av">AD</div>
          <div>
            <p className="user-name">Admin</p>
            <p className="user-role">Principal</p>
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="main">
        <header className="topbar">
          <div>
            <h1>{info.title}</h1>
            <p>{info.sub}</p>
          </div>
          <div className="topbar-date">
            {new Date().toLocaleDateString('en-PK', {
              weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
            })}
          </div>
        </header>

        <div className="page-wrap">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
