import React, { createContext, useContext, useState, type ReactNode } from 'react';

const ExpandShellOutputContext = createContext<{
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}>({
  expanded: false,
  setExpanded: () => {},
});

export function ExpandShellOutputProvider({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const [expanded, setExpanded] = useState(false);
  return (
    <ExpandShellOutputContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </ExpandShellOutputContext.Provider>
  );
}

export function useExpandShellOutput(): {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
} {
  return useContext(ExpandShellOutputContext);
}
