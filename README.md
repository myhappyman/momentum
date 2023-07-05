# Chrome의 유명한 모멘텀 앱 만들어보기

react를 통해 웹 어플리케이션으로 모멘텀 앱을 작성해봅니다.

## 🚀개발 목표

🔹 UI는 내가 원하는 편한 형태로 구성
🔹 전역 상태관리는 redux를 사용(그동안 학습한 내용 반복 학습용)
🔹 최대한 인터렉티브한 페이지 구성을 위해 framer-motion이나 dragging관련 라이브러리를 적용
🔹 위치 정보를 통해 접속자의 날씨, 지역 정보를 출력하는 기능을 작성
🔹 사용자의 그날 목표를 작성하고 관리 할 수 있는 todoList를 작성

## 사용 라이브러리

- 전역상태관리(redux)
  `redux`, `react-redux`, `@reduxjs/toolkit`
- UI관련
  `styled-components`
- 애니메이트
  `framer-motion`

## 구조 변경 작업

- 기존 CRA로 생성한 프로젝트에서 vite으로 변경
- 전반적인 레이아웃 구조부터 폴더 구조까지 전부 변경 처리
- prettierrc, eslint 적용
