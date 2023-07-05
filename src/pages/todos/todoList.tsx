import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';

import { RootState } from '../../store';
import { remove, updateDone } from '../../store/todos';

import TodosEmpty from './todosEmpty';
import { Wrapper, Title, RedBtn } from '../../atom/Styles/CommonComponents';

export default function TodoList() {
  const todosObj = useSelector((state: RootState) => state?.todos);
  console.log('todosObj', todosObj);
  const dispatch = useDispatch();
  const onToggle = (key: string, id: number) => {
    dispatch(updateDone({ key, id }));
  };
  const removeTodo = (key: string) => {
    dispatch(remove(key));
  };
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
                <TodoArea>
                  {todos.map((x) => (
                    <Todo key={x.id}>
                      <TodoDone onClick={() => onToggle(key, x.id)}>
                        {x.done ? <GrCheckboxSelected /> : <GrCheckbox />}
                      </TodoDone>
                      <TodoText>{x.todo}</TodoText>
                    </Todo>
                  ))}
                </TodoArea>
                <WriteDate>{writeDate}</WriteDate>
                <RedBtn onClick={() => removeTodo(key)}>삭제</RedBtn>
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
`;

const TodoDay = styled.li`
  margin: 0 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 14px;
`;

const TodoArea = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Todo = styled.li`
  color: #000;
`;
const TodoDone = styled.span``;
const TodoText = styled.span``;

const WriteDate = styled.span``;
