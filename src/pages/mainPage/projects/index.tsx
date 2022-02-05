import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { centralizeFlex, sectionMainTitle, newSection } from '../../../components/global/globalStyles';
import { DisplayProject } from '../../../components/projects/DisplayProject';

type IProps = {
  forwardRef: React.MutableRefObject<HTMLDivElement | null>;
  projectsRef: {
    [key: string]: React.MutableRefObject<HTMLDivElement | null>;
  };
};

const Projects: React.FC<IProps> = ({ forwardRef, projectsRef }) => {
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
            The two most recent ones are commercial projects, rest created for educational purposes.
            <br />
            <br />
            <Box fontSize="14px" color="#696969">
              My learning pattern in most cases is creating some smaller projects where I focus on single functionality
              and at the end create one bigger and well-polished app combining what I learned through them.
            </Box>
          </Box>
        </Flex>
        <DisplayProject
          projectRef={projectsRef.pzp2ueProject}
          title="Asystent Postępowania"
          description="Application which I build on frontend side alone from start to finish. This was a complex application with a couple of modules, payments, 
          different functionalities for clients and administators with one module available without registration. I used the same stack which was used in FYTA with one
          difference, that is to replace Redux-Saga with Redux-Thunk which I was much more familiar."
          imgFileName="comProj2"
          linkLive="https://raporty.postepowania.pl/"
        />
        <DisplayProject
          projectRef={projectsRef.fytaProject}
          title="Administration panel for FYTA"
          description="My first commercial application. Since it is panel only for administration to manage whole data and mobile application, deployed on AWS and 
          protected with credentials I can't really show much of this project. I joined to other developer on early stages and we used stack which he already started 
          working with: Typescript, ReactJS, Redux, Redux-Saga. This project took a couple of month to complete."
          imgFileName="comProj1"
        />
        <DisplayProject
          projectRef={projectsRef.votingSystemProject}
          title="Voting system"
          description="Inspiration taken from the presidential election in 2020 which I took a part as a committee member and
          operator. My job was to enter data into the system and I tried to create similar system both on frontend and backend."
          imgFileName="proj1"
          linkLive="https://myedudomain.com/"
          linkGithub="https://github.com/LysPaw/wyboryreactapp"
          warningMessage={
            <div>
              Backend initially deployed on <a href="https://www.digitalocean.com">Digital Ocean</a> but since it's not
              a commercial project (which I think is more valuable for employer) and due to maintenance cost is
              currently taken down.
            </div>
          }
        />
        <DisplayProject
          projectRef={projectsRef.onlineHardwareStoreProject}
          title="Online hardware store"
          description="I tried to create a simple hardware store. Backend doesn't support authentication as well as payment, 
          since the main goal was to consolidate my skills in React (SPA), Redux and Typescript. "
          imgFileName="proj2"
          linkLive="https://lyspaw.github.io/"
          linkGithub="https://github.com/LysPaw/LysPaw.github.io/tree/master"
        />
        <DisplayProject
          projectRef={projectsRef.authenticationWithExpressProject}
          title="Authentication with Express"
          description="Initial goal was to create a simulator of a big system of container transport, but after creating authentication and UI inside 
          I really didn't have an idea at how it should exactly work. In the meantime, I discovered a new technologies like Typescript 
          and GraphQL so I decided to pick up those and the app was left uncompleted."
          imgFileName="proj3"
          linkLive="https://thawing-springs-31265.herokuapp.com/"
          linkGithub="https://github.com/PawelLys/React-Node_01"
        />
        <DisplayProject
          projectRef={projectsRef.accomodationAppProject}
          title="Accomodation app"
          description="My first bigger React app. As you could expect the code is not the cleanest, but I am really happy with the visual aspect of 
          the page, especially since back then I didn't use yet any UI library and done everything from start to finish in CSS myself."
          imgFileName="proj4"
          linkLive="https://pawellys.github.io/"
          linkGithub="https://github.com/PawelLys/accomodation_page"
        />
        <DisplayProject
          title="Portfolio"
          description="This page - simple SPA build with React and Chakra UI."
          imgFileName="proj5"
          linkGithub="https://github.com/LysPaw/portfolio"
          lastElement
        />
      </Box>
    </Flex>
  );
};

export default Projects;
