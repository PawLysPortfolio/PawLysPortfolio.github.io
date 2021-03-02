import React from 'react';
import { Box, Flex, Icon, Link } from '@chakra-ui/react';
import { newSection, sectionMainTitle } from '../../../components/global/globalStyles';
import { HiMail, HiPhone } from 'react-icons/hi';

type IProps = { forwardRef: React.MutableRefObject<HTMLDivElement | null> };

const Contact: React.FC<IProps> = ({ forwardRef }) => {
  return (
    <Box
      ref={forwardRef}
      background="#fcfcfc"
      {...newSection}
      pb="15vh"
      mb="100px"
      pl={{ base: '3%', xl: '10%' }}
      pr={{ base: '10px', md: '20px', xl: '40px' }}>
      <Flex flexWrap="wrap">
        <Box pl={{ base: '10px', sm: '10%' }} {...sectionMainTitle} textAlign="left">
          CONTACT ME
        </Box>
        <Box mb="50px" pr={{ base: '0', lg: '50px' }}>
          I am available for hire preceded by free of charge trial period if it's necessary to test my skills or to see
          if I will make a good fit with your team.
        </Box>
        <Flex flex="0 0 100%" flexWrap="wrap" mb="10px">
          <Box minW="150px">E-mail:</Box>
          <Link
            href="mailto:lyskawinski.pawel@gmail.com"
            opacity=".93"
            _hover={{ opacity: '1', color: '#000' }}
            _focus={{ boxShadow: 'none' }}>
            <Icon as={HiMail} mb="2px" mr="2px" />
            lyskawinski.pawel@gmail.com
          </Link>
        </Flex>
        <Flex flexWrap="wrap">
          <Box minW="150px">Phone:</Box>
          <Box>
            <Icon as={HiPhone} mb="2px" mr="5px" />
            516 680 014
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;
