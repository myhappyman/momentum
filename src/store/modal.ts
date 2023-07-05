import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// alert
type AlertTypes = 'INFO' | 'WARNING';
export interface IAlert {
  open: boolean;
  type?: AlertTypes;
  message?: string;
}

const toggleAlert = (state: IAlert, action: PayloadAction<IAlert>) => {
  const { open, message, type } = action.payload;
  return { ...state, open, message, type };
};

export const modalAlert = createSlice({
  name: 'alert',
  initialState: {} as IAlert,
  reducers: {
    alerPopup: toggleAlert,
  },
});

// confirm
export interface IConfirm {
  open: boolean;
  message?: string;
  success?: any;
  cancel?: any;
}

const toggleConfirm = (state: IConfirm, action: PayloadAction<IConfirm>) => {
  const { open, message, success, cancel } = action.payload;
  return { ...state, open, message, success, cancel };
};

export const modalConfirm = createSlice({
  name: 'confirm',
  initialState: {} as IConfirm,
  reducers: {
    confirmPopup: toggleConfirm,
  },
});

export const { alerPopup } = modalAlert.actions;
export const { confirmPopup } = modalConfirm.actions;
