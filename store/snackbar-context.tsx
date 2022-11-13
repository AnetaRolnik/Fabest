import { createContext, useState, useEffect } from "react";

import { Snackbar } from "../types/snackbar";

type Props = {
  children: React.ReactNode;
};

type SnackbarContextType = {
  snackbar: Snackbar | null;
  showSnackbar: (data: Snackbar) => void;
};

const SnackbarContext = createContext<SnackbarContextType>({
  snackbar: null,
  showSnackbar: (data: Snackbar) => {},
});

export const SnackbarContextProvider = (props: Props) => {
  const [activeSnackbar, setActiveSnackbar] = useState<Snackbar | null>(null);

  useEffect(() => {
    if (activeSnackbar) {
      const timer = setTimeout(() => setActiveSnackbar(null), 4000);

      return () => clearTimeout(timer);
    }
  }, [activeSnackbar]);

  const showSnackbarHandler = (snackbarData: Snackbar) => {
    setActiveSnackbar(snackbarData);
  };

  const context = {
    snackbar: activeSnackbar,
    showSnackbar: showSnackbarHandler,
  };

  return (
    <SnackbarContext.Provider value={context}>
      {props.children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContext;
