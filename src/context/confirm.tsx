import { createContext, useState } from 'react';

interface IState {
  open: boolean;
  message: string;
  success?: () => void;
}
interface IActions {
  openConfirm: () => void;
  closeConfirm: () => void;
  setSuccess?: React.Dispatch<React.SetStateAction<React.FC>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const ConfirmContext = createContext<{
  state: IState;
  actions: IActions;
}>({
  state: {
    open: false,
    message: '',
    success: () => {},
  },
  actions: {
    openConfirm: () => {},
    closeConfirm: () => {},
    setSuccess: () => {},
    setMessage: () => {},
  },
});

const ConfirmProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const openConfirm = () => setOpen(true);
  const closeConfirm = () => setOpen(false);
  const value = {
    state: { open, message },
    actions: { openConfirm, closeConfirm, setMessage },
  };
  return (
    <ConfirmContext.Provider value={value}>{children}</ConfirmContext.Provider>
  );
};

export default ConfirmProvider;
