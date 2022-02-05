import React from 'react';
import { sectionMainTitle, newSection } from '../../../components/global/globalStyles';
import { Box, BoxProps, Flex, FlexProps } from '@chakra-ui/react';
import { displayProjectBtn } from '../roadmap';

type IProps = {
  forwardRef: React.MutableRefObject<HTMLDivElement | null>;
  projects: React.MutableRefObject<HTMLDivElement | null>[];
};

const Experience: React.FC<IProps> = ({ forwardRef, projects }) => {
  return (
    <Box
      ref={forwardRef}
      background="#fcfcfc"
      {...newSection}
      pl={{ base: '3%', xl: '10%' }}
      pr={{ base: '10px', md: '20px', xl: '40px' }}
      overflow="hidden"
      transition="max-height 1s"
      position="relative">
      <Flex flexWrap="wrap">
        <Box pl="10%" {...sectionMainTitle} textAlign="left">
          Experience
        </Box>
        <Flex {...mainFlexContainer}>
          <Flex {...timeLine} flexDirection={{ base: 'row', md: 'column' }}>
            <Box height="10%" pr="15px" {...marker('50px')}>
              2st quarter of 2021 <Box display={{ base: 'initial', md: 'none' }}>- today</Box>
            </Box>
            <Box height="100%" position="relative" display={{ base: 'none', md: 'block' }} mt="20px" {...line}>
              today
            </Box>
          </Flex>
          <Flex {...boxContainer} mt={{ base: '20px', md: '0' }}>
            <Box flex="0 0 100%" fontWeight="500" mb="20px">
              Frontend Developer at Vao sp. z o.o.
            </Box>
            <Box flex="0 0 100%">
              My first job as frontend developer. Besides improving my programming skills (mostly in area of file
              structures), I learnt how to write documentations and how deployment looks like. I learnt a lot about
              previously unavailable for me world and that is... simply how should I work. That is working with other
              programmers on the same project and working in Scrum (I joined when company was changing working
              methodology from Waterfall to Scrum, so I saw first one in action as well). I obtained knowledge about
              correct usage of git flow and how to deploy hotfixes.
            </Box>
            {displayProjectBtn(0, projects, true)}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

const mainFlexContainer: FlexProps = {
  flex: '0 0 100%',
  flexDirection: { base: 'column', md: 'row' },
};

const timeLine: FlexProps = {
  flex: '0 0 auto',
  maxWidth: '100%',
  mr: '45px',
  pt: '20px',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '50px',
  borderRight: { base: 'none', md: '1px solid #000' },
  position: 'relative',
};

const marker: (top?: string) => BoxProps = (top = '30px') => {
  return {
    fontSize: { base: '18px', md: '16px' },
    _after: {
      content: '""',
      position: 'absolute',
      transform: 'rotate(45deg)',
      top,
      right: '-3.5px',
      display: { base: 'none', md: 'block' },
      width: '6.5px',
      height: '6.5px',
      backgroundColor: 'rgba(187,30,30,.9)',
    },
  };
};

const boxContainer: FlexProps = {
  flex: '0 1 100%',
  flexWrap: 'wrap',
  border: '1px solid #777777',
  padding: '20px',
  background: '#f8f8f8',
  boxShadow: '3px 3px 5px 3px rgba(0, 0, 0, .3)',
};

const line: BoxProps = {
  _after: {
    content: '""',
    position: 'absolute',
    top: '13px',
    left: '-50%',
    transform: 'translateX(50%)',
    display: 'block',
    width: '8px',
    height: '1px',
    backgroundColor: '#000',
  },
};

export default Experience;

//<Route path="/1" component={ProductDetails} />
