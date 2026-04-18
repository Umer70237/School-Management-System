import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout     from './layouts/Layout';
import Dashboard  from './pages/dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index           element={<Dashboard />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
