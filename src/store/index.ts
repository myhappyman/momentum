import { configureStore } from '@reduxjs/toolkit';
import { toDos } from './todos';
import { commonModals } from './commonModals';

const store = configureStore({
  reducer: {
    todos: toDos.reducer,
    commonModals: commonModals.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
