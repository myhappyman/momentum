import styled from 'styled-components';

//CommonLayout
export const SectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow: auto;
`;
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

// Button
const Btn = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;

  & ~ & {
    margin-left: 4px;
  }
`;
export const BlueBtn = styled(Btn)`
  color: ${(props) => props.theme.btnColor1};
  background-color: ${(props) => props.theme.btnBgColor1};
`;
export const RedBtn = styled(Btn)`
  color: ${(props) => props.theme.btnColor2};
  background-color: ${(props) => props.theme.btnBgColor2};
`;

// BoldText
const Strong = styled.strong`
  font-weight: 600;
`;
export const B = styled(Strong)`
  color: ${(props) => props.theme.textColor1};
`;
export const ColorB = styled(Strong)`
  color: ${(props) => props.theme.bgCircleColor2};
`;
