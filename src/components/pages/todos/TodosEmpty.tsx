import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function TodosEmpty() {
  return (
    <Wrap>
      <p>등록된 일정이 없습니다.</p>
      <p>
        <AddLink to="/addTodo">🪄여기</AddLink>를 클릭해서 일정을 추가해보세요
      </p>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  text-align: center;
`;

const AddLink = styled(Link)`
  text-decoration: underline;
  color: ${(props) => props.theme.textColor3};
`;
