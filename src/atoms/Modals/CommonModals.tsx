import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { BsFillInfoSquareFill } from 'react-icons/bs';
import { RootState } from '../../store';
import { BlueBtn, RedBtn } from '../Styles/CommonComponents';
import modalsHook from './modalsHook';

const useModalsHook = () => {
  const option = useSelector((state: RootState) => state?.commonModals);
  const { onClose } = modalsHook();

  const confirmAction = () => {
    if (option && typeof option.onSuccess === 'function') {
      option.onSuccess();
    } else {
      return;
    }
    onClose();
  };

  return {
    option,
    confirmAction,
    onClose,
  };
};

function CommonModals() {
  const { option, confirmAction, onClose } = useModalsHook();

  if (!option.open) {
    return null;
  }

  return (
    <>
      <DimLayer />
      <Dialog open={option.open} onClose={onClose}>
        <Form method="dialog">
          <Header>
            <Title>{option.title}</Title>
            <CloseTitleBtn value="close" onClick={onClose}>
              <GrClose />
            </CloseTitleBtn>
          </Header>
          <Contents>
            <IconArea className="info">
              <BsFillInfoSquareFill className="icon" />
            </IconArea>
            <Message>{option.message}</Message>
          </Contents>
          <Footer>
            {option.type === 'confirm' ? (
              <BlueBtn onClick={confirmAction}>확인</BlueBtn>
            ) : null}
            <RedBtn value="close">닫기</RedBtn>
          </Footer>
        </Form>
      </Dialog>
    </>
  );
}

export default CommonModals;

const DimLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 9998;
`;

const Dialog = styled.dialog`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  border: none;
  border-radius: 30px 0 30px 0;
  box-shadow: ${(props) => props.theme.boxShadow};
  z-index: 9999;
`;

const Form = styled.form`
  flex-direction: column;
`;

const Area = styled.div`
  padding: 20px;
`;
const Header = styled(Area)`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-weight: 700;
`;
const CloseTitleBtn = styled.button`
  border: none;
  background-color: none;
  margin-right: 10px;
  cursor: pointer;
`;
const Contents = styled(Area)`
  display: flex;
  align-items: center;
  justify-content: baseline;
`;
const IconArea = styled.span`
  position: relative;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  padding: 10px;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
  }
  &.info {
    background-color: #e9e8f5;
    .icon {
      color: #294ce9;
    }
  }
  &.warning {
    background-color: #f5f0cd;
    .icon {
      color: #f59300;
    }
  }
`;
const Message = styled.span`
  margin-left: 20px;
`;
const Footer = styled(Area)`
  text-align: right;
`;
