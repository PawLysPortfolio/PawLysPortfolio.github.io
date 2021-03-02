import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { centralizeFlex, sectionMainTitle, newSection } from '../../../components/global/globalStyles';
import { DisplayProject } from '../../../components/projects/DisplayProject';

type IProps = { forwardRef: React.MutableRefObject<HTMLDivElement | null> };

const Projects: React.FC<IProps> = ({ forwardRef }) => {
  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      {...newSection}
      pl="20px"
      pr="30px"
      ref={forwardRef}>
      <Box {...centralizeFlex}>
        <Flex {...sectionMainTitle} flexWrap="wrap">
          <Flex {...centralizeFlex} width="100%">
            Projects
          </Flex>
          <Box fontSize="16px" fontWeight="400" marginX={{ base: '0', sm: '10%' }} mt="10px">
            My learning pattern in most cases is creating some smaller projects where I focus on single functionality
            and at the end create one bigger and well-polished app combining what I learned through them. Below I
            present those bigger projects which can serve as a summary of my progress.
          </Box>
        </Flex>
        <DisplayProject
          title="Voting system"
          description="Inspiration taken from the presidential election in 2020 which I took a part as a committee member and
          operator. My job was to enter data into the system and I just though that creating something similar would be
          a perfect exercise to hone my skills both in frontend and backend."
          imgFileName="proj1"
          linkLive="https://myedudomain.com/"
          linkGithub="https://github.com/LysPaw/wyboryreactapp"
        />
        <DisplayProject
          title="Online hardware store"
          description="I tried to create a simple hardware store. Backend doesn't support authentication as well as payment, 
          since the main goal was to consolidate my skills in React (SPA), Redux and Typescript. "
          imgFileName="proj2"
          linkLive="https://lyspaw.github.io/"
          linkGithub="https://github.com/LysPaw/LysPaw.github.io/tree/master"
        />
        <DisplayProject
          title="Authentication with Express"
          description="Initial goal was to create a simulator of a big system of container transport, but after creating authentication and menu 
          I really didn't have an idea at how it should exactly work. In the meantime, I discovered a new technologies like Typescript 
          and GraphQL so I decided to pick up those and the app was left uncompleted."
          imgFileName="proj3"
          linkLive="https://thawing-springs-31265.herokuapp.com/"
          linkGithub="https://github.com/PawelLys/React-Node_01"
        />
        <DisplayProject
          title="Accomodation app"
          description="My first bigger React app. As you could expect the code is a complete mess, but I am really happy with the visual aspect of 
          the page, especially since back then I didn't use any UI library and done everything from start to finish in CSS."
          imgFileName="proj4"
          linkLive="https://pawellys.github.io/"
          linkGithub="https://github.com/PawelLys/accomodation_page"
          lastElement
        />
      </Box>
    </Flex>
  );
};

export default Projects;
