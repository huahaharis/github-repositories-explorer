import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './core/components/layout/Layout';
import Home from './features/pages/Home/Home';
import Detail from './features/pages/Detail/Detail';
import NotFound from './features/not-found/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
