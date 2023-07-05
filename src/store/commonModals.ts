import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ModalTypes = {
  open: boolean;
  type: 'alert' | 'confirm';
  title: string;
  message: string;
};

const open = (
  state: ModalTypes,
  action: PayloadAction<Omit<ModalTypes, 'open'>>,
) => {
  const { type, title, message } = action.payload;
  return { ...state, open: true, type, title, message };
};

const close = (state: ModalTypes) => {
  return { ...state, open: false };
};

export const commonModals = createSlice({
  name: 'commonModals',
  initialState: {} as ModalTypes,
  reducers: {
    openModals: open,
    closeModals: close,
  },
});

export const { openModals, closeModals } = commonModals.actions;
