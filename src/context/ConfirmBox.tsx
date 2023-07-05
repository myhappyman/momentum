import { useCallback, useContext } from 'react';
import styled from 'styled-components';

import { ConfirmContext } from './confirm';
import { BlueBtn, RedBtn } from '../styles/CommonComponents';
import { GrClose } from 'react-icons/gr';

const ConfirmBox = () => {
  const { state, actions } = useContext(ConfirmContext);
  const onClose = useCallback(() => {
    actions.closeConfirm();
  }, [actions]);

  const onCheck = () => {
    console.log('onCheck');
    console.log(state.success);
    console.log(typeof state.success);
    state.success?.();
  };
  return (
    <>
      <DimLayer onClick={onClose} open={state.open} />
      <Wrap open={state.open}>
        <Modal>
          <Header>
            <Title>확인</Title>
            <ButtonArea onClick={onClose}>
              <GrClose />
            </ButtonArea>
          </Header>
          <Contents>
            <Message>{state.message}</Message>
          </Contents>
          <Footer>
            <BlueBtn onClick={onCheck}>확인</BlueBtn>
            <RedBtn onClick={onClose}>닫기</RedBtn>
          </Footer>
        </Modal>
      </Wrap>
    </>
  );
};

export default ConfirmBox;

const DimLayer = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 9998;
`;
const Wrap = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;
const Modal = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  border-radius: 30px;
  background-color: #fff;
`;
const Area = styled.div`
  padding: 20px;
`;
const Header = styled(Area)`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.span`
  font-weight: 700;
`;
const ButtonArea = styled.span`
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
