import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCurrentDate } from '../utils';

export interface ITodo {
  id: number;
  todo: string;
  done: boolean;
  mode: boolean;
}

export interface ITodos {
  [regitDate: string]: {
    id: number;
    todos: ITodo[];
    writeDate: string;
  };
}

interface IUpdateDone {
  key: string;
  id: number;
}

interface Add {
  regitDate: string;
  todos: ITodo[];
}

/**
 * redux todo 일정 추가 메소드
 * object에 기존 값이 존재하더라도 덮어쓴다.
 * @param state
 * @param action
 */
const addTodo = (state: ITodos, action: PayloadAction<Add>) => {
  const { regitDate, todos } = action.payload;
  const id = Date.now();
  const writeDate = getCurrentDate();
  state[regitDate] = { id, todos, writeDate }; // 일정 추가
};

/**
 * Object에서 키 삭제하는 방법
 * @param key Object의 key값 (string)
 * @param param1 기존 State (Object)
 * @returns Object
 */
const removeKey = (key: string, { [key]: _, ...rest }) => rest;

/**
 * redux todo 일정 삭제 메소드
 * delete 메소드를 사용하여 Object내의 일정에 대한 key, value값을 제거한다.
 * @param state
 * @param action
 * @returns
 */
const removeTodo = (state: ITodos, action: PayloadAction<string>) => {
  const regitDate = action.payload;
  // delete state[regitDate];
  // return { ...state };
  return removeKey(regitDate, state);
};

/**
 * 보기 탭에서 done처리를 하는경우 해당 일정내의 todo배열에 일치하는 부분만
 * done의 상태값을 toggle처리 해준다.
 * @param state
 * @param action
 * @returns
 */
const updateDoneTodo = (state: ITodos, action: PayloadAction<IUpdateDone>) => {
  const { key, id } = action.payload;
  console.log('updateDoneTodo', key, id);
  return state;
  // return state.map((data: ITodos) => {
  //   if (data.id === action.payload.dataId) {
  //     const toggleDone = data.todos.map((x: ITodo) =>
  //       x.id === action.payload.id ? { ...x, done: !x.done } : x,
  //     );
  //     return { ...data, todos: toggleDone };
  //   } else {
  //     return data;
  //   }
  // });
};

export const toDos = createSlice({
  name: 'todos',
  initialState: {} as ITodos,
  reducers: {
    add: addTodo,
    updateDone: updateDoneTodo,
    remove: removeTodo,
  },
});

export const { add, updateDone, remove } = toDos.actions;
