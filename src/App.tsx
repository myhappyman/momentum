import { Routes, Route } from 'react-router-dom';
import Layout from './atoms/Layout/Layout';
import Home from './components/pages/Home/Home';
import TodoForm from './components/pages/todos/TodoForm';
import TodoList from './components/pages/todos/TodoList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="addTodo" element={<TodoForm />} />
        <Route path="allView" element={<TodoList />} />
        <Route path="detail/:id" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
