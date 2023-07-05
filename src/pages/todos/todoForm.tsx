import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ITodo, add } from '../../store/todos';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

import styled from 'styled-components';
import {
  Wrapper,
  Title,
  BlueBtn,
  RedBtn,
} from '../../atom/Styles/CommonComponents';

import { getCurrentDate } from '../../utils';
import { ConfirmContext } from '../../context/confirm';
import { openModals } from '../../store/commonModals';

export default function TodoForm() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const { state, actions } = useContext(ConfirmContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodo(e.target.value);

  const toggleDone = (id: number) =>
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );

  const regitRealTodos = () => {
    dispatch(add({ regitDate: getCurrentDate(''), todos: todoList }));
    dispatch(
      openModals({
        type: 'alert',
        title: '알림',
        message: '일정이 등록되었습니다.',
      }),
    );
    setTodoList([]);
    setTodo('');
  };

  const regitTodos = () => {
    if (todoList.length === 0) {
      dispatch(
        openModals({
          type: 'alert',
          title: '알림',
          message: '일정은 최소한 한개를 등록하셔야 합니다.',
        }),
      );
      return;
    }

    actions.openConfirm();
    state.success = regitRealTodos;
    // actions.setSuccess(regitRealTodos);
  };

  const tempTodosDelte = (id: number) => {
    setTodoList((prev) => prev.filter((x) => x.id !== id));
  };

  const tempStorageTodo = (e: React.FormEvent<HTMLFormElement>) => {
    if (todoList.length > 10) {
      dispatch(
        openModals({
          type: 'alert',
          title: '알림',
          message: '일정은 10개까지 등록 가능합니다.',
        }),
      );
      return;
    }

    setTodoList((prev) => [
      ...prev,
      { id: Date.now(), todo: todo, done: false, mode: false },
    ]);
    setTodo('');
    e.preventDefault();
  };

  return (
    <Wrapper>
      <Title>일정 관리 추가</Title>
      <Form onSubmit={tempStorageTodo}>
        <InputWrap>
          <Input
            type="text"
            value={todo}
            onChange={onChange}
            placeholder="✨ 일정을 입력하세요"
          />
          <BlueBtn type="submit">추가</BlueBtn>
        </InputWrap>
        <SubTitle>
          <span>😶‍🌫️ 추가한 일정</span>
          <RedBtn type="button" onClick={regitTodos}>
            등록
          </RedBtn>
        </SubTitle>
        <TempList>
          {todoList.map((todo) => (
            <TempTodo key={todo.id} onClick={() => toggleDone(todo.id)}>
              <Checked>
                {todo.done ? (
                  <AiFillStar className="icon fillstar" />
                ) : (
                  <AiOutlineStar className="icon" />
                )}
              </Checked>
              <Text>{todo.todo}</Text>
              <Delete onClick={() => tempTodosDelte(todo.id)}>🗑️</Delete>
            </TempTodo>
          ))}
        </TempList>
      </Form>
    </Wrapper>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`;

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

const Input = styled.input`
  padding: 6px;
  margin-right: 8px;
  border: none;
  border-radius: 10px;
  color: ${(props) => props.theme.textColor1};
  background-color: #f1f8f5;
  font-size: 18px;
  line-height: 18px;

  &::placeholder {
    color: #abb6ba;
  }
`;

const SubTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  span {
    font-size: 18px;
    font-weight: 500;
  }
`;
const TempList = styled.ul``;
const TempTodo = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid #dedede;
  border-radius: 14px;
  padding: 10px;
  cursor: pointer;

  & ~ & {
    margin-top: 10px;
  }
`;
const Checked = styled.span`
  flex-grow: 0.1;
  line-height: 4px;
  vertical-align: middle;

  .icon {
    color: #000;
  }
  .fillstar {
    color: yellow;
  }
`;
const Text = styled.span`
  flex-grow: 2.7;
  font-size: 16px;
  text-align: left;
`;
const Delete = styled.span`
  flex-grow: 0.1;
`;
