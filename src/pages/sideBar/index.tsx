import React, { useEffect, useState, useRef } from 'react';
import { useRefLink } from '../../RefLinkContext';
import { Box, BoxProps, Flex, Icon, Image, ListItem, UnorderedList, Link } from '@chakra-ui/react';
import { centralizeFlex } from '../../components/global/globalStyles';
import { HiMenu } from 'react-icons/hi';
import { scrollIntoView } from '../../components/projects/scrollIntoView';

export default () => {
  const [showNav, setShowNav] = useState(false);
  const refLink = useRefLink();

  const [showNavFixed, setShowNavFixed] = useState(false);
  const showNavFixedRef = useRef(showNavFixed);
  showNavFixedRef.current = showNavFixed;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const isMobileRef = useRef(isMobile);
  isMobileRef.current = isMobile;

  const menuWrapperRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position >= 285 && !showNavFixedRef.current) {
      setShowNavFixed(true);
    } else if (position < 285 && showNavFixedRef.current) {
      setShowNavFixed(false);
    }
  };

  const updateSize = () => {
    if (window.innerWidth <= 991 && !isMobileRef.current) setIsMobile(true);
    else if (window.innerWidth > 991 && isMobileRef.current) setIsMobile(false);
  };

  const onMousedown = (e: MouseEvent) => {
    console.log({ showNavFixed, isMobile, showNav, menuWrapperRef });
    if (
      showNavFixedRef.current &&
      isMobileRef.current &&
      menuWrapperRef.current &&
      !menuWrapperRef.current.contains(e.target as Node)
    ) {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateSize, { passive: true });
    document.addEventListener('mousedown', onMousedown, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.addEventListener('resize', updateSize);
      document.addEventListener('mousedown', onMousedown, { passive: true });
    };
  }, []);

  return (
    <Flex
      ref={menuWrapperRef}
      direction="column"
      bottom="0"
      left="0"
      position={{ base: showNavFixed && isMobile ? 'fixed' : 'relative', lg: 'fixed' }}
      zIndex="2"
      width={{ base: showNavFixed && isMobile ? (showNav ? '250px' : '0') : '100%', lg: '25%', xl: '340px' }}
      top={showNavFixed && isMobile ? '48px' : '0'}
      fontSize="14px"
      color="#fff"
      textTransform="uppercase"
      background-color="rgba(145,13,13)"
      backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${require('../../media/bgphoto.jpg')})`}>
      <Flex
        {...centralizeFlex}
        zIndex="3"
        background="inherit"
        pb="10px"
        transform={showNavFixed && isMobile ? (showNav ? 'translateY(0)' : 'translateX(-250px)') : 'none'}>
        <Box>
          <Flex {...centralizeFlex} width="200px" height="200px" marginX="auto">
            <Box width="132px" height="140px" borderRadius="50%" overflow="hidden" background="#a8f9ff">
              <Image width="130px" height="170px" src={require('../../media/photo.jpg')} alt="Paweł Łyskawiński" />
            </Box>
          </Flex>
          <Box fontSize={{ base: showNavFixed && isMobile ? '16px' : '32px', lg: '24px', xl: '32px' }}>
            Paweł Łyskawiński
          </Box>
          <Box fontSize={{ base: showNavFixed && isMobile ? '12px' : '14px', lg: '15px', xl: '16px' }}>
            junior frontend developer
          </Box>
        </Box>
      </Flex>
      <Flex
        display={{ base: 'inherit', lg: 'none' }}
        paddingY="10px"
        pr="10%"
        borderTop="1px solid #a3a3a3"
        borderBottom="1px solid #a3a3a3"
        justifyContent="flex-end"
        zIndex="3"
        background="inherit"
        {...fixedNav(isMobile, showNavFixed)}>
        <Flex flex="0 0 40%" cursor="pointer" justifyContent="flex-end" onClick={() => setShowNav(!showNav)}>
          <Icon as={HiMenu} fontSize="26px" />
        </Flex>
      </Flex>
      <Box
        as="nav"
        lineHeight="30px"
        fontSize="14px"
        height={{ base: showNav ? '215px' : '0px', lg: 'auto' }}
        transition={isMobile && showNavFixed ? 'none' : 'all .4s'}
        textAlign={{ base: isMobile && showNavFixed ? 'left' : 'right', lg: 'left' }}
        transform={isMobile ? (showNav ? 'translateY(0px)' : 'translateY(-215px)') : 'none'}
        display={isMobile && showNavFixed ? (showNav ? 'initial' : 'none') : 'initial'}
        background={isMobile && showNavFixed ? 'inherit' : 'transparent'}>
        <UnorderedList pt={{ base: '10px', lg: '35px' }} listStyleType="none" marginLeft="0">
          <ListItem padding="0 10%">
            <Box {...itemBoxStyle} onClick={() => scrollIntoView(refLink[0])}>
              Technologies
            </Box>
          </ListItem>
          <ListItem padding="0 10%">
            <Box {...itemBoxStyle} onClick={() => scrollIntoView(refLink[1])}>
              Experience
            </Box>
          </ListItem>
          <ListItem padding="0 10%">
            <Box {...itemBoxStyle} onClick={() => scrollIntoView(refLink[2])}>
              Roadmap
            </Box>
          </ListItem>
          <ListItem padding="0 10%">
            <Box {...itemBoxStyle} onClick={() => scrollIntoView(refLink[3])}>
              Projects
            </Box>
          </ListItem>
          <ListItem padding="0 10%">
            <Box {...itemBoxStyle} onClick={() => scrollIntoView(refLink[4])}>
              Contact
            </Box>
          </ListItem>
        </UnorderedList>
        <UnorderedList listStyleType="none" marginLeft="0" mt="15px">
          <ListItem padding="0 10%">
            <Link
              width="100%"
              href="https://pawlysportfolio.github.io/cv/"
              isExternal
              _focus={{ boxShadow: 'none' }}
              opacity={{ base: '1', lg: '.9' }}
              _hover={{ opacity: '1', textDecoration: { base: 'none', lg: 'underline' }, color: 'inherit' }}>
              <Box>CV</Box>
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};

const itemBoxStyle: BoxProps = {
  cursor: 'pointer',
  opacity: { base: '1', lg: '.9' },
  textDecoration: 'none',

  _hover: { opacity: '1', textDecoration: { base: 'none', lg: 'underline' } },
};

const fixedNav = (isMobile = false, scrollHeightCondidion = false, top = '0'): BoxProps => {
  return isMobile && scrollHeightCondidion
    ? {
        position: 'fixed',
        width: '100vw',
        top,
      }
    : {};
};
