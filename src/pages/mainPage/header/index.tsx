import React from 'react';
import { Box, Flex, FlexProps, Icon } from '@chakra-ui/react';
import { centralizeFlex, sectionMainTitle } from '../../../components/global/globalStyles';
import { FaNodeJs, FaDatabase, FaCodeBranch, FaHtml5 } from 'react-icons/fa';

export default ({ forwardRef }: { forwardRef: React.MutableRefObject<HTMLDivElement | null> }) => {
  return (
    <Flex direction="column" justifyContent="space-between" alignItems="center" ref={forwardRef}>
      <Box {...centralizeFlex} margin="100px 30px">
        <Flex flexWrap="wrap">
          <Box {...sectionMainTitle}>Stack</Box>

          <Flex {...flexItem} mb={{ base: '15px', md: '70px' }}>
            <Box overflow="hidden" width="130px" height="76px">
              <Icon width="130px" height="76px" as={FaHtml5} />
            </Box>
            <Box my="5px" fontWeight="500" color="#333" fontSize="18px">
              Frontend
            </Box>
            <Box>
              HTML, CSS/SASS, JavaScript, TypeScript, React, Redux, Next.js, Bootstrap, Styled Components, Chakra UI
            </Box>
          </Flex>

          <Flex {...flexItem} mb={{ base: '15px', md: '70px' }}>
            <Box overflow="hidden" width="130px" height="76px">
              <Icon width="130px" height="76px" as={FaNodeJs} />
            </Box>
            <Box my="5px" fontWeight="500" color="#333" fontSize="18px">
              Backend
              <Box fontWeight="400" fontSize="12px" opacity="0.7" mt="-5px">
                basic
              </Box>
            </Box>
            <Box>
              Node.js, Express (<span style={{ whiteSpace: 'nowrap' }}>REST API, GraphQL</span>)
            </Box>
          </Flex>

          <Flex {...flexItem}>
            <Box overflow="hidden" width="130px" height="76px">
              <Icon width="130px" height="76px" as={FaDatabase} />
            </Box>
            <Box my="5px" fontWeight="500" color="#333" fontSize="18px">
              Database
              <Box fontWeight="400" fontSize="12px" opacity="0.7" mt="-5px">
                basic
              </Box>
            </Box>
            <Box>PostgreSQL, Redis</Box>
          </Flex>

          <Flex {...flexItem}>
            <Box overflow="hidden" width="130px" height="76px">
              <Icon width="130px" height="76px" as={FaCodeBranch} />
            </Box>
            <Box my="5px" fontWeight="500" color="#333" fontSize="18px">
              DevOps
            </Box>
            <Box>Git, Docker</Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

const flexItem: FlexProps = {
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  flex: { base: '0 0 100%', md: '0 0 50%' },
  maxW: { base: '100%', md: '50%' },
  paddingX: '10%',
  mb: '15px',
};
