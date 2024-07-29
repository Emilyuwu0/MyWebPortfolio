import React, { createContext, useState, useContext, useEffect } from 'react';

const LoadingContext = createContext({ isLoading: true, setLoading: (value: boolean) => {} });

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
