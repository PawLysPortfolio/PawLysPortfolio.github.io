import React, { useState } from 'react';
import { sectionMainTitle, newSection } from '../../../components/global/globalStyles';
import { Box, BoxProps, Button, Flex, FlexProps, Icon } from '@chakra-ui/react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { scrollIntoView } from '../../../components/projects/scrollIntoView';

type IProps = {
  forwardRef: React.MutableRefObject<HTMLDivElement | null>;
  projects: React.MutableRefObject<HTMLDivElement | null>[];
};

const Roadmap: React.FC<IProps> = ({ forwardRef, projects }) => {
  const [showMore, setShowMore] = useState(false);

  const displayProjectBtn = (arrayNum: number) => {
    return (
      <Button
        display="block"
        colorScheme="green"
        mt="15px"
        pl="1.3rem"
        _focus={{ outline: 'none' }}
        onClick={() => scrollIntoView(projects[arrayNum])}>
        Project <Icon as={HiChevronDown} fontSize="22px" />
      </Button>
    );
  };
  return (
    <Box
      ref={forwardRef}
      background="#fcfcfc"
      {...newSection}
      pl={{ base: '3%', xl: '10%' }}
      pr={{ base: '10px', md: '20px', xl: '40px' }}
      overflow="hidden"
      height={showMore ? 'auto' : '100vh'}
      maxH={showMore ? '550vh' : '100vh'}
      transition="max-height 1s"
      position="relative">
      <Flex flexWrap="wrap">
        <Box pl="10%" {...sectionMainTitle} textAlign="left">
          Roadmap
        </Box>
        <Flex {...mainFlexContainer}>
          <Flex {...timeLine}>
            <Box height="100%" pr="15px" {...marker()}>
              1st quarter of 2019
            </Box>
          </Flex>
          <Flex {...boxContainer} mt={{ base: '20px', md: '0' }}>
            <Box flex="0 0 100%" fontWeight="500" mb="20px">
              HTML, CSS/SASS, JavaScript
            </Box>
            <Box flex="0 0 100%">
              It all started from some simple pages written in HTML, CSS/SASS, pure JavaScript. I started learning those
              technologies on my own without any courses or bootcamps, purely for my enjoyment.
            </Box>
          </Flex>
        </Flex>

        <Flex {...mainFlexContainer}>
          <Flex {...timeLine} pt="40px">
            <Box height="100%" pr="15px" {...marker('50px')}>
              2st quarter of 2019
            </Box>
          </Flex>
          <Flex mt="20px" {...boxContainer}>
            <Box flex="0 0 100%" fontWeight="500" mb="20px">
              JavaScript, React, Redux
            </Box>
            <Box flex="0 0 100%">
              From "big three" frontend frameworks for JavaScript I decided to go with React first. I really appreciate
              how easy it is to add a new libraries based on your needs (Redux for example). Of course after I will get
              a confirmation that my React is really advanced I plan on picking up Angular and Vue as well.
            </Box>
            {displayProjectBtn(3)}
          </Flex>
        </Flex>

        <Flex {...mainFlexContainer}>
          <Flex {...timeLine} pt="40px">
            <Box height="100%" pr="15px" {...marker('50px')}>
              4st quarter of 2019
            </Box>
          </Flex>
          <Flex mt="20px" {...boxContainer}>
            <Box flex="0 0 100%" fontWeight="500" mb="20px">
              JavaScript, React, Node.js, Express (REST API server), MongoDB
            </Box>
            <Box flex="0 0 100%">
              After a few minor projects build with only frontend I was felling that I really miss a backend. Sometimes
              for a project to make any sense, you just need authentication or other features that are only possible
              after creating a server. At this point since I felt fairly proficient in my JavaScript skills, I decided
              to go for the easiest route for me, with is stick to it and pick up Express as my backend framework. Of
              course in future I plan to learn C# and Java with their respectively frameworks as well.
              {displayProjectBtn(2)}
            </Box>
          </Flex>
        </Flex>

        <Flex {...mainFlexContainer}>
          <Flex {...timeLine} pt="40px">
            <Box height="100%" pr="15px" {...marker('50px')}>
              1st quarter of 2020
            </Box>
          </Flex>
          <Flex mt="20px" {...boxContainer}>
            <Box flex="0 0 100%" fontWeight="500" mb="20px">
              Typescript
            </Box>
            <Box flex="0 0 100%">
              Basically in the middle of my fist bigger fullstack project I discover a Typescript and immediately
              started learning it. Since I started programming a little first in C++ I was really missing a type safety
              in JavaScript and Typescript solved most of my problems, not to mention new functionalities it offers.
            </Box>
          </Flex>
        </Flex>

        <Flex {...mainFlexContainer}>
          <Flex {...timeLine} pt="40px">
            <Box height="100%" pr="15px" {...marker('50px')}>
              2st quarter of 2020
            </Box>
          </Flex>
          <Flex mt="20px" {...boxContainer}>
            <Box flex="0 0 100%" fontWeight="500" mb="20px">
              Javascript (Typescript), React (SPA), Redux, Styled Components
            </Box>
            <Box flex="0 0 100%">
              I decided to create my first bigger project with Typescript and since I wasn't fully certain in
              implementation Typescript on the backend I decided to go consolidate my basics and make a big Single Page
              Application in React.
              {displayProjectBtn(1)}
            </Box>
          </Flex>
        </Flex>

        <Flex {...mainFlexContainer}>
          <Flex {...timeLine} flexDirection={{ base: 'row', md: 'column' }} pt="40px">
            <Box height="10%" pr="15px" {...marker('50px')}>
              3st quarter of 2020 <Box display={{ base: 'initial', md: 'none' }}>- today</Box>
            </Box>
            <Box height="100%" position="relative" display={{ base: 'none', md: 'block' }} {...line}>
              today
            </Box>
          </Flex>
          <Flex mt="20px" {...boxContainer}>
            <Box flex="0 0 100%" fontWeight="500" mb="20px">
              Javascript (Typescript), Next.js, Node.js, Express (GraphQL server), PostgreSQL, Chakra UI
            </Box>
            <Box flex="0 0 100%">
              After I was done with my React (SPA) project I decided to go back and finish my previous fullstack
              project, but since I genuinely enjoy discovering a new technologies in the web development world, I
              stumbled upon a GraphQL and it immediately appealed to me. Instead of creating all those endpoints and
              using correct methods for them in REST API, I really liked how it's only a single one in GrahpQL. I also
              wasn't too much fond of MongoDB so I decided to go for PostgreSQL and I can most certainly say that I like
              it very much.
              {displayProjectBtn(0)}
            </Box>
          </Flex>
        </Flex>

        <Flex
          position="absolute"
          bottom="0"
          left="0"
          width="100%"
          height={showMore ? '80px' : '130px'}
          backgroundImage="linear-gradient(rgba(81, 108, 180, 0.4), rgba(81, 108, 180, 1))"
          color="#fff"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          fontWeight="500"
          lineHeight={showMore ? '30px' : '40px'}
          cursor="pointer"
          onClick={() => setShowMore(!showMore)}>
          <Box fontSize={showMore ? '23px' : '26px'}>{showMore ? 'Hide' : 'Show more'}</Box>
          <Icon as={showMore ? HiChevronUp : HiChevronDown} fontSize={showMore ? '26px' : '30px'} />
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
  height: 'auto',
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

const boxContainer: FlexProps = {
  flex: '0 1 100%',
  flexWrap: 'wrap',
  border: '1px solid #777777',
  padding: '20px',
  background: '#f8f8f8',
  boxShadow: '3px 3px 5px 3px rgba(0, 0, 0, .3)',
};

export default Roadmap;

//<Route path="/1" component={ProductDetails} />
