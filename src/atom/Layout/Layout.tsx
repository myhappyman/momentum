import { Outlet } from 'react-router-dom';

import { styled } from 'styled-components';
import ConfirmProvider from '../../context/confirm';
import Header from '../Header/Header';

export default function Layout() {
  return (
    <Wrapper>
      <ConfirmProvider>
        <Inner>
          <Header />
          <Outlet />
        </Inner>
      </ConfirmProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-40%, -40%);
    width: 600px;
    height: 600px;
    background-color: ${(props) => props.theme.bgCircleColor1};
    border-radius: 50%;
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(40%, 40%);
    width: 800px;
    height: 800px;
    background-color: ${(props) => props.theme.bgCircleColor1};
    border-radius: 50%;
  }
`;

const Inner = styled.main`
  position: relative;
  width: 90vw;
  height: 90vh;
  background-color: #fff;
  border: none;
  border-radius: 20px;
  box-shadow: ${(props) => props.theme.boxShadow};
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(40%, 35%);
    width: 600px;
    height: 600px;
    background-color: ${(props) => props.theme.bgCircleColor2};
    border-radius: 50%;
  }
`;
