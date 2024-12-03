import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './components/layout/Layout';

// Create a client
const queryClient = new QueryClient();

// Lazy load pages
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Reservations = React.lazy(() => import('./pages/Reservations'));
const Spaces = React.lazy(() => import('./pages/Spaces'));
const Teams = React.lazy(() => import('./pages/Teams'));
const Reports = React.lazy(() => import('./pages/Reports'));
const Settings = React.lazy(() => import('./pages/Settings'));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </React.Suspense>
            } />
            <Route path="reservations" element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Reservations />
              </React.Suspense>
            } />
            <Route path="spaces" element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Spaces />
              </React.Suspense>
            } />
            <Route path="teams" element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Teams />
              </React.Suspense>
            } />
            <Route path="reports" element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Reports />
              </React.Suspense>
            } />
            <Route path="settings" element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Settings />
              </React.Suspense>
            } />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;