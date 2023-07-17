import styled from 'styled-components';
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';

import { Wrapper, Title, RedBtn } from '../../../atoms/Styles/CommonComponents';
import TodosEmpty from './TodosEmpty';
import hookList from '../../hooks/todos/hookList';

export default function TodoList() {
  const { todosObj, onDoneToggle, removeTodo } = hookList();

  return (
    <Wrapper>
      <Title>일정 관리 보기</Title>
      <List>
        {!todosObj || Object.keys(todosObj).length === 0 ? (
          <TodosEmpty />
        ) : (
          todosObj &&
          Object.keys(todosObj).map((key: string) => {
            const { todos, id, writeDate } = todosObj[key];
            return (
              <TodoDay key={id}>
                <WriteDate>{writeDate}</WriteDate>
                <TodoArea>
                  {todos.map((x) => (
                    <Todo key={x.id}>
                      <TodoDone onClick={() => onDoneToggle(key, x.id)}>
                        {x.done ? <GrCheckboxSelected /> : <GrCheckbox />}
                      </TodoDone>
                      <TodoText>{x.todo}</TodoText>
                    </Todo>
                  ))}
                </TodoArea>
                <Footer>
                  <RedBtn onClick={() => removeTodo(key)}>삭제</RedBtn>
                </Footer>
              </TodoDay>
            );
          })
        )}
      </List>
    </Wrapper>
  );
}

const List = styled.ul`
  width: 100%;
  display: flex;
  margin-top: 30px;
`;

const TodoDay = styled.li`
  width: 300px;
  margin: 0 10px;
  padding: 0 0 10px;
  border-radius: 10px 0 10px 0;
  font-size: 14px;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

const WriteDate = styled.div`
  padding: 10px 0;
  border-radius: 10px 0 0 0;
  text-align: center;
  background-color: #afb495;
  color: #fff;
  font-weight: 700;
`;

const TodoArea = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;
const Todo = styled.li`
  color: #000;
`;
const TodoDone = styled.span``;
const TodoText = styled.span``;

const Footer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: end;
`;
