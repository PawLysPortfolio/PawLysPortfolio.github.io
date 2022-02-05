import { Box } from '@chakra-ui/react';
import React, { useRef, useState, useEffect } from 'react';
import { useRefLinkUpdate } from '../../RefLinkContext';
import MainPageHeader from './header';
import Experience from './experience';
import Roadmap from './roadmap';
import Projects from './projects';
import Contact from './contact';

const MainPage = (): JSX.Element => {
  const [projects, setProjects] = useState<React.MutableRefObject<HTMLDivElement | null>[]>([]);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const roadmapRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const refLinkUpdate = useRefLinkUpdate();

  const pzp2ueProject = useRef<HTMLDivElement | null>(null);
  const fytaProject = useRef<HTMLDivElement | null>(null);
  const votingSystemProject = useRef<HTMLDivElement | null>(null);
  const onlineHardwareStoreProject = useRef<HTMLDivElement | null>(null);
  const authenticationWithExpressProject = useRef<HTMLDivElement | null>(null);
  const accomodationAppProject = useRef<HTMLDivElement | null>(null);

  const projectsRefObj = {
    pzp2ueProject,
    fytaProject,
    votingSystemProject,
    onlineHardwareStoreProject,
    authenticationWithExpressProject,
    accomodationAppProject,
  };

  useEffect(() => {
    if (headerRef && headerRef.current && roadmapRef && roadmapRef.current) {
      refLinkUpdate([headerRef, experienceRef, roadmapRef, projectsRef, contactRef]);
    }

    const {
      pzp2ueProject,
      fytaProject,
      votingSystemProject,
      onlineHardwareStoreProject,
      authenticationWithExpressProject,
      accomodationAppProject,
    } = projectsRefObj;
    if (
      pzp2ueProject &&
      pzp2ueProject.current &&
      fytaProject &&
      fytaProject.current &&
      votingSystemProject &&
      votingSystemProject.current &&
      onlineHardwareStoreProject &&
      onlineHardwareStoreProject.current &&
      authenticationWithExpressProject &&
      authenticationWithExpressProject.current &&
      accomodationAppProject &&
      accomodationAppProject.current
    ) {
      setProjects([
        pzp2ueProject,
        fytaProject,
        votingSystemProject,
        onlineHardwareStoreProject,
        authenticationWithExpressProject,
        accomodationAppProject,
      ]);
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
      <Experience forwardRef={experienceRef} projects={projects} />
      <Roadmap forwardRef={roadmapRef} projects={projects} />
      <Projects forwardRef={projectsRef} projectsRef={projectsRefObj} />
      <Contact forwardRef={contactRef} />
    </Box>
  );
};

export default MainPage;
