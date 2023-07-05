import { SectionWrapper } from '../../atom/Styles/CommonComponents';
import TodoForm from './todoForm';

function Todos() {
  console.log('TODOS');
  return (
    <SectionWrapper>
      <TodoForm />
    </SectionWrapper>
  );
}

export default Todos;
