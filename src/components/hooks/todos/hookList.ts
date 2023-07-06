import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { remove, updateDone } from '../../../store/todos';

export default function hookList() {
  const todosObj = useSelector((state: RootState) => state?.todos);
  const dispatch = useDispatch();
  const onDoneToggle = (key: string, id: number) => {
    dispatch(updateDone({ key, id }));
  };
  const removeTodo = (key: string) => {
    dispatch(remove(key));
  };

  return {
    todosObj,
    onDoneToggle,
    removeTodo,
  };
}
