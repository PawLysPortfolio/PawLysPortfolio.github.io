import { Box } from '@chakra-ui/react';
import React, { useRef, useEffect } from 'react';
import { useRefLinkUpdate } from '../../RefLinkContext';
import MainPageHeader from './header';
import Roadmap from './roadmap';
import Projects from './projects';
import Contact from './contact';

const MainPage = (): JSX.Element => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const roadmapRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const refLinkUpdate = useRefLinkUpdate();

  useEffect(() => {
    if (headerRef && headerRef.current && roadmapRef && roadmapRef.current) {
      refLinkUpdate([headerRef, roadmapRef, projectsRef, contactRef]);
    }
  }, []);

  return (
    <Box
      boxSizing="border-box"
      pl={{ base: '0', lg: '25%', xl: '340px' }}
      overflowX="hidden"
      maxW="1366px"
      background="#fff">
      <MainPageHeader forwardRef={headerRef} />
      <Roadmap forwardRef={roadmapRef} />
      <Projects forwardRef={projectsRef} />
      <Contact forwardRef={contactRef} />
    </Box>
  );
};

export default MainPage;
