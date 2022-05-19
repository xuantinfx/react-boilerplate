import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode, GlobalStyleProps } from '@chakra-ui/theme-tools';
import Colors from '../foundations/colors';
import BorderRadius from '../foundations/borderRadius';

const config: ThemeConfig = {
  cssVarPrefix: 'fsw',
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const index = extendTheme({
  config,
  colors: Colors,
  radii: BorderRadius,
  fonts: {
    body: "'Roboto Condensed', sans-serif",
    heading: "'Roboto Condensed', sans-serif",
  },
  styles: {
    global: (props: GlobalStyleProps) => ({
      body: {
        fontFamily: 'body',
        color: mode(Colors.dark.text, Colors.dark.text)(props), // use directly Colors or use 'dark.text' string with Chakra's ExtendTheme
        bg: mode(Colors.dark.bg, Colors.dark.bg)(props),
        lineHeight: 'base',
      },
    }),
  },
});

export default index;
