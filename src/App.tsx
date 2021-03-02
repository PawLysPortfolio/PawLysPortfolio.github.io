import React from 'react';
import { Box } from '@chakra-ui/react';
import MainPageHeader from './pages/mainPage';
import SideBar from './pages/sideBar';
import RefLinkContext from './RefLinkContext';

export const App: React.FC = () => {
  return (
    <Box background="#eaeaea">
      <RefLinkContext>
        <SideBar />
        <MainPageHeader />
      </RefLinkContext>
    </Box>
  );
};
