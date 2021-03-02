import React, { useState } from 'react';
import { useRefLink } from '../../RefLinkContext';
import { Box, BoxProps, Flex, Icon, Image, ListItem, UnorderedList } from '@chakra-ui/react';
import { centralizeFlex } from '../../components/global/globalStyles';
import { HiMenu } from 'react-icons/hi';

export default () => {
  const [showNav, setShowNav] = useState(false);
  const refLink = useRefLink();

  const scrollIntoView = (to: React.MutableRefObject<HTMLDivElement | null>) => {
    if (to && to.current) {
      to.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  return (
    <Flex
      direction="column"
      top="0"
      bottom="0"
      left="0"
      position={{ base: 'relative', lg: 'fixed' }}
      zIndex="2"
      width={{ base: '100%', lg: '25%', xl: '340px' }}
      fontSize="14px"
      color="#fff"
      textTransform="uppercase"
      background-color="rgba(145,13,13,.8)"
      backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${require('../../media/bgphoto.jpg')})`}>
      <Flex {...centralizeFlex}>
        <Box>
          <Flex {...centralizeFlex} width="200px" height="200px" marginX="auto">
            <Box width="132px" height="140px" borderRadius="50%" overflow="hidden" background="#a8f9ff">
              <Image width="130px" height="170px" src={require('../../media/photo.jpg')} alt="Paweł Łyskawiński" />
            </Box>
          </Flex>
          <Box fontSize={{ base: '24px', sm: '32px', lg: '24px', xl: '32px' }}>Paweł Łyskawiński</Box>
          <Box fontSize={{ base: '14px', sm: '16px', lg: '15px', xl: '16px' }}>full-stack web developer</Box>
        </Box>
      </Flex>
      <Flex
        display={{ base: 'inherit', lg: 'none' }}
        mt="10px"
        paddingY="10px"
        pr="10%"
        borderTop="1px solid #a3a3a3"
        borderBottom="1px solid #a3a3a3"
        justifyContent="flex-end"
        onClick={() => setShowNav(!showNav)}>
        <Flex flex="0 0 40%" cursor="pointer" justifyContent="flex-end">
          <Icon as={HiMenu} fontSize="26px" />
        </Flex>
      </Flex>
      <Box
        as="nav"
        lineHeight="30px"
        fontSize="14px"
        height={{ base: showNav ? '160px' : '0px', lg: '160px' }}
        transition="height .4s"
        textAlign={{ base: 'right', lg: 'left' }}>
        <UnorderedList pt={{ base: '10px', lg: '45px' }} listStyleType="none" marginLeft="0">
          <ListItem padding="0 10%">
            <Box {...itemBoxStyle} onClick={() => scrollIntoView(refLink[0])}>
              Technologies
            </Box>
          </ListItem>
          <ListItem padding="0 10%">
            <Box {...itemBoxStyle} onClick={() => scrollIntoView(refLink[1])}>
              Roadmap
            </Box>
          </ListItem>
          <ListItem padding="0 10%">
            <Box {...itemBoxStyle} onClick={() => scrollIntoView(refLink[2])}>
              Projects
            </Box>
          </ListItem>
        </UnorderedList>
        <UnorderedList listStyleType="none" marginLeft="0" mt="15px">
          <ListItem padding="0 10%">
            <Box {...itemBoxStyle} onClick={() => scrollIntoView(refLink[3])}>
              Contact
            </Box>
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
