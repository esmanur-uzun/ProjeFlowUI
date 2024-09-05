import React, { createContext, useContext, useState, ReactNode } from "react";

type GlobalDataContextType = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const defaultContextValues: GlobalDataContextType = {
    isOpen: false,
    setIsOpen: () => {},
};

const DataContext = createContext<GlobalDataContextType>(defaultContextValues);

export function useGlobalDataContext() {
    return useContext(DataContext);
}

type Props = {
    children: ReactNode;
};

export function DataProvider({ children }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(defaultContextValues.isOpen);

    return (
        <DataContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </DataContext.Provider>
    );
}
