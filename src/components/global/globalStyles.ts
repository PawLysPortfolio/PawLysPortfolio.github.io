import { BoxProps } from '@chakra-ui/react';

export const centralizeFlex: BoxProps = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const newSection: BoxProps = {
  pt: '50px',
  pb: '80px',
};

export const sectionMainTitle: BoxProps = {
  fontSize: '36px',
  fontWeight: '500',
  flex: '0 0 100%',
  maxW: '100%',
  textAlign: 'center',
  mb: { base: '20px', md: '50px' },
};
