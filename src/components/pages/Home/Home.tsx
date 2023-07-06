import styled from 'styled-components';
import {
  B,
  ColorB,
  SectionWrapper,
} from '../../../atoms/Styles/CommonComponents';

export default function Home() {
  return (
    <Wrap>
      <Title>
        일정 관리 <ColorB>Momentum</ColorB>을
        <br />
        사용해보세요!
      </Title>
      <Contents>
        오늘 하루도 바쁘고 열심히 살아가는 <B>당신!</B>
        <br />
        오늘 해야 할 일들이 너무 많은가요? <br />
        아무리 꼼꼼한 성격의 사람이라도 바쁘다보면 종종 일정을 놓치는 경우가
        있을겁니다.
        <br />
        하루에 처리해야 할 일정들을 <ColorB>Momentum</ColorB>을 사용해보세요.
        <br />
        날짜별로 일정들을 관리해줍니다.
        <br />
        처리한 일은 체크하여 구분을 할 수 있습니다.
        <br />
        여러분의 컴퓨터에 일정 정보를 저장하고 사용합니다.
        <br />
        또한, 소소한 Widget으로 오늘의 날씨와 현재 시간을 보여드립니다.
        <br />
      </Contents>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-top: 50px;
  padding: 30px;
`;

const Title = styled.h1`
  width: 55%;
  font-size: 64px;
  font-weight: 400;
`;

const Contents = styled.p`
  margin-top: 30px;
  font-size: 16px;
  strong {
  }
`;
