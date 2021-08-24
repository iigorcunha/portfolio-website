import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    cGrey: {
      400: '#52585D',
      500: '#464C52',
      600: '#343A40',
    },
    white: '#F5F5F5',
    cPurple: {
      500: '#9505FC',
    },
  },
  fonts: {
    heading: 'Quicksand',
    body: 'Quicksand',
  },
});
