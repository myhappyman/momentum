// import original module declarations
import 'styled-components';
import { Theme } from './theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    textColor1: string;
    textColor2: string;
    textColor3: string;
    bgColor1: string;
    bgColor2: string;
    bgColor3: string;
    bgCircleColor1: string;
    bgCircleColor2: string;
    btnColor1: string;
    btnColor2: string;
    btnBgColor1: string;
    btnBgColor2: string;
    boxShadow: string;
  }
}
