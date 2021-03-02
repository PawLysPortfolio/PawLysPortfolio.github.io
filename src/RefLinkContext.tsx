import React, { useState, createContext, useContext } from 'react';

const RefsLinkContext = createContext<React.MutableRefObject<HTMLDivElement | null>[]>([]);
const RefsLinkUpdateContext = createContext<
  React.Dispatch<React.SetStateAction<React.MutableRefObject<HTMLDivElement | null>[]>>
>(() => {});

export const useRefLink = () => useContext(RefsLinkContext);

export const useRefLinkUpdate = () => useContext(RefsLinkUpdateContext);

const App: React.FC = ({ children }) => {
  const [refsLinkState, setRefsLinkState] = useState<React.MutableRefObject<HTMLDivElement | null>[]>([]);

  return (
    <RefsLinkContext.Provider value={refsLinkState}>
      <RefsLinkUpdateContext.Provider value={setRefsLinkState}>{children}</RefsLinkUpdateContext.Provider>
    </RefsLinkContext.Provider>
  );
};

export default App;
