import { useDispatch } from 'react-redux';
import { closeModals, openModals } from '../../store/modals';

export default function modalsHook() {
  const dispatch = useDispatch();
  const openAlert = (title = '알림', message = '') => {
    dispatch(
      openModals({
        type: 'alert',
        title,
        message,
      }),
    );
  };

  const openConfirm = (title = '확인', message = '', onSuccess: () => {}) => {
    dispatch(
      openModals({
        type: 'confirm',
        title,
        message,
        onSuccess,
      }),
    );
  };

  const onClose = () => {
    dispatch(closeModals());
  };

  return {
    openAlert,
    openConfirm,
    onClose,
  };
}
