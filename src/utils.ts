import { ITodos } from './store/todos';

export function getCurrentDate(sep = '.') {
  const d = new Date();
  const year = d.getFullYear();
  const month = setTenFormat(d.getMonth() + 1);
  const date = setTenFormat(d.getDate());
  return `${year}${sep}${month}${sep}${date}`;
}

type TenNumber = number | string;
function setTenFormat(num: TenNumber): string {
  if (typeof num === 'number') {
    return num < 10 ? '0' + num : num + '';
  } else {
    return +num < 10 ? '0' + num : num;
  }
}

const TODOS_KEY = 'MY_TODOS';
export const saveTodos = (todos: ITodos) => {
  const value = JSON.stringify(todos);
  localStorage.setItem(TODOS_KEY, value);
};

export const getTodos = () => {
  const json = localStorage.getItem(TODOS_KEY);
  if (json) {
    return JSON.parse(json);
  }
  return {};
};
