import { useState } from 'react';
import { ITodo, add } from '../../../store/todos';
import modalsHook from '../../../atoms/Modals/modalsHook';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentDate } from '../../../utils';
import { RootState } from '../../../store';

export default function addTodos() {
  const todosObj = useSelector((state: RootState) => state?.todos);
  const dispatch = useDispatch();
  const { openAlert, openConfirm } = modalsHook();
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState<ITodo[]>(
    todosObj[getCurrentDate('')]?.todos ?? [],
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodo(e.target.value);

  const toggleDone = (id: number) =>
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );

  const regist = () => {
    dispatch(add({ regitDate: getCurrentDate(''), todos: todoList }));
    openAlert('알림', '일정이 등록되었습니다.');
    setTodo('');
  };
  const regitTodos = () => {
    if (todoList.length === 0) {
      openAlert('알림', '일정은 최소한 한개를 등록하셔야 합니다.');
      return;
    }
    openConfirm('확인', '할일을 추가하시겠습니까?', regist as any);
  };

  const tempTodosDelte = (id: number) => {
    setTodoList((prev) => prev.filter((x) => x.id !== id));
  };

  const tempStorageTodo = (e: React.FormEvent<HTMLFormElement>) => {
    if (todoList.length > 10) {
      openAlert('알림', '일정은 10개까지 등록 가능합니다.');
      return;
    }

    setTodoList((prev) => [
      ...prev,
      { id: Date.now(), todo: todo, done: false, mode: false },
    ]);
    setTodo('');
    e.preventDefault();
  };

  return {
    todo,
    todoList,
    onInputChange,
    toggleDone,
    regitTodos,
    tempTodosDelte,
    tempStorageTodo,
  };
}
