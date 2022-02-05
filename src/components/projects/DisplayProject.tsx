import React from 'react';
import { Box, Button, Flex, Icon, Image, Link } from '@chakra-ui/react';
import { centralizeFlex } from '../global/globalStyles';
import { HiChevronRight } from 'react-icons/hi';
import { FaGithub, FaExclamationTriangle } from 'react-icons/fa';

type IProps = {
  projectRef?: React.MutableRefObject<HTMLDivElement | null>;
  title: string;
  description: string;
  imgFileName: string;
  linkLive?: string;
  linkGithub?: string;
  lastElement?: boolean;
  warningMessage?: React.ReactNode;
};

export const DisplayProject: React.FC<IProps> = ({
  projectRef = null,
  title,
  description,
  imgFileName,
  linkLive,
  linkGithub,
  lastElement,
  warningMessage,
}) => {
  return (
    <Flex
      mb={{ base: lastElement ? '0' : '20px', md: lastElement ? '0' : '50px' }}
      pt={{ base: '20px', md: '50px' }}
      borderTop="1px solid #eaeaea"
      borderBottom={lastElement ? '1px solid #eaeaea' : 'none'}
      pb={lastElement ? { base: '20px', md: '50px' } : '0'}
      flexDirection={{ base: 'column', xl: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      id={title.split(' ')[0]}
      ref={projectRef}>
      <Box flex="1">
        <Flex {...centralizeFlex} fontWeight="500" color="#333" fontSize="18px" mb="10px">
          {title}
        </Flex>

        <Box mb="20px" textAlign={lastElement ? 'center' : 'left'}>
          {description}
        </Box>

        <Flex justifyContent="space-evenly" mb="30px">
          {linkLive && (
            <Link href={linkLive} isExternal _hover={{ textDecoration: 'none' }}>
              <Button colorScheme="blue" pl="26px" _focus={{ outline: 'none' }}>
                Live <Icon as={HiChevronRight} fontSize="22px" mt="3px" />
              </Button>
            </Link>
          )}
          {linkGithub && (
            <Link href={linkGithub} isExternal _hover={{ textDecoration: 'none', color: 'inherit' }} ml="10px">
              <Button pl="26px" _focus={{ outline: 'none' }}>
                Github <Icon as={FaGithub} fontSize="22px" mt="3px" ml="5px" />
              </Button>
            </Link>
          )}
        </Flex>
        {warningMessage && (
          <Flex alignItems="center" justifyContent="center" mt="-10px" mb="10px" fontSize="12px" color="#696969">
            <Icon as={FaExclamationTriangle} mb="auto" mt="2px" mr="4px" fontSize="14px" color="#ffc107" />
            {warningMessage}
          </Flex>
        )}
      </Box>
      <Flex
        flex={{ base: '0 0 1', xl: '0 0 454px' }}
        width={{ base: '90%', sm: '400px', md: '454px' }}
        height={{ base: 'initial', sm: '215px', md: '249px' }}
        ml="15px"
        boxShadow="3px 3px 5px 3px rgba(0, 0, 0, .3)">
        <Box overflow="hidden">
          <Image width="100%" height="100%" src={require(`../../media/${imgFileName}.png`)} alt="proj1" />
        </Box>
      </Flex>
    </Flex>
  );
};
