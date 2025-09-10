import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const LoginApp = React.lazy(() => import('login/LoginApp'));
const TmsApp = React.lazy(() => import('tms/TmsApp'));
const EposApp = React.lazy(() => import('epos/EposApp'));

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/login">Login</Link> |{' '}
        <Link to="/tms">TMS</Link> |{' '}
        <Link to="/epos">EPOS</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<LoginApp />} />
          <Route path="/tms" element={<TmsApp />} />
          <Route path="/epos" element={<EposApp />} />
          <Route path="/" element={<div>Welcome to the container</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}
