import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/sharedLayout/sharedLayout';

const DummyTable = lazy(() => import('./components/tabs/dummyTable'));
const DummyChart = lazy(() => import('./components/tabs/dummyChart'));
const DummyList = lazy(() => import('./components/tabs/dummyList'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/dummyTable" element={<DummyTable />} />
        <Route path="/dummyChart" element={<DummyChart />} />
        <Route path="/dummyList" element={<DummyList />} />
      </Route>
    </Routes>
  );
}
