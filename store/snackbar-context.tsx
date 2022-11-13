import { createContext, useState, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

type SnackbarContextType = {
  snackbar: { status: string; message: string } | null;
  showSnackbar: (data: { status: string; message: string }) => void;
};

const SnackbarContext = createContext<SnackbarContextType>({
  snackbar: null,
  showSnackbar: (data: { status: string; message: string }) => {},
});

export const SnackbarContextProvider = (props: Props) => {
  const [activeSnackbar, setActiveSnackbar] = useState<{
    status: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (activeSnackbar) {
      const timer = setTimeout(() => setActiveSnackbar(null), 4000);

      return () => clearTimeout(timer);
    }
  }, [activeSnackbar]);

  const showSnackbarHandler = (snackbarData: {
    status: string;
    message: string;
  }) => {
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
