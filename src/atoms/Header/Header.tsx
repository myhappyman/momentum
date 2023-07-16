import { useEffect, useState } from 'react';
import { Link, PathMatch, useMatch } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { getCurrentDate } from '../../utils';
import { B } from '../Styles/CommonComponents';

interface IPosition {
  coords: ICoords;
}

interface ICoords {
  latitude: number;
  longitude: number;
}

const URL_PATH = [
  { url: '/', name: '홈', id: 0 },
  { url: '/addTodo', name: '일정 추가', id: 1 },
  { url: '/allView', name: '일정 보기', id: 2 },
];

const GET_WEATHER_URL = (lat: number, lon: number, api_key: string) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric&lang=ko`;
const WHEATHER_KEY = import.meta.env.VITE_WHEATHER_KEY;

export default function Header() {
  const homeMatch: PathMatch<string> | null = useMatch('/');
  const addTodoMatch: PathMatch<string> | null = useMatch('/addTodo');
  const allViewMatch: PathMatch<string> | null = useMatch('/allView');
  const match_arr = [homeMatch, addTodoMatch, allViewMatch];

  const [temp, setTemp] = useState(0);
  const [weather, setWeather] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const onSuccess = async (position: IPosition) => {
      const { latitude, longitude } = position.coords;
      const response = await fetch(
        GET_WEATHER_URL(latitude, longitude, WHEATHER_KEY),
      );
      const json = await response.json();
      const { main, weather } = json;
      console.log(weather);
      setTemp(main?.temp);
      setIcon(`https://openweathermap.org/img/wn/${weather[0]?.icon}.png`);
      setWeather(weather[0]?.main);
    };

    const onError = () => {
      console.warn('날씨와 위치정보를 가져오는데 오류가 발생했습니다.');
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  console.log(temp);

  return (
    <Wrapper>
      <Title>
        <Logo>
          <B>⭐Momentum's</B>
        </Logo>
        <Today>{getCurrentDate()}</Today>
        <Temp>{temp}°C</Temp>
        <Weather>
          <img src={icon} />
          {weather}
        </Weather>
      </Title>
      <Nav>
        <NavWrap>
          <AnimatePresence>
            {URL_PATH.map((info) => (
              <GoLink
                key={info.id}
                className={match_arr[info.id] ? 'active' : ''}
              >
                <Link to={info.url}>{info.name}</Link>
              </GoLink>
            ))}
          </AnimatePresence>
        </NavWrap>
      </Nav>
    </Wrapper>
  );
}

// const navVariants = {
//   initial: {
//     background: 'none',
//   },
//   animate: {
//     background: 'green',
//     transition: { duration: 0.5 },
//   },
//   exit: {
//     background: 'none',
//   },
// };

// const GoLinkProps = {
//   variants: navVariants,
//   initial: 'initial',
//   animate: 'animate',
//   exit: 'exit',
//   className: 'active',
// };

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: #000;
  border-radius: 24px 0 0 24px;
  background: #fff;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Logo = styled.span`
  font-size: 18px;
`;
const Today = styled.span`
  margin-left: 20px;
`;
const Temp = styled.span`
  margin-left: 20px;
`;
const Weather = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
  img {
    display: inline-block;
  }
`;

const Nav = styled.nav``;
const NavWrap = styled.ul`
  display: flex;
`;

const GoLink = styled(motion.li)`
  padding: 10px 15px;
  margin: 0 5px;

  &.active {
    color: #fff;
    background-color: #017142;
    border-radius: 16px;
    font-weight: 600;
  }
`;
