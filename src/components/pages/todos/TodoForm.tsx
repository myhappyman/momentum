import styled from 'styled-components';

import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import {
  Wrapper,
  Title,
  BlueBtn,
  RedBtn,
} from '../../../atoms/Styles/CommonComponents';
import addTodos from '../../hooks/todos/addTodos';

export default function TodoForm() {
  const {
    todo,
    todoList,
    onInputChange,
    toggleDone,
    regitTodos,
    tempTodosDelte,
    tempStorageTodo,
  } = addTodos();

  return (
    <Wrapper>
      <Title>일정 관리 추가</Title>
      <Form onSubmit={tempStorageTodo}>
        <InputWrap>
          <Input
            type="text"
            value={todo}
            onChange={onInputChange}
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
