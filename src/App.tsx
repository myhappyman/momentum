import { Routes, Route } from 'react-router-dom';
import Layout from './atom/Layout/Layout';
import Home from './pages/Home';
import Todos from './pages/todos/Todos';
import AllView from './pages/todos/AllView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="addTodo" element={<Todos />} />
        <Route path="allView" element={<AllView />} />
        <Route path="detail/:id" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
