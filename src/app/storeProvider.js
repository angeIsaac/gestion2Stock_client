"use client";
import { Provider } from 'react-redux';
import { makeStore } from "@/lib/store";
import { useRef } from 'react';



export const StoreProvider = ({ children }) => {
    const stoRef = useRef() 
    if (!stoRef.current) {
        stoRef.current = makeStore();
    }
    return (
    <Provider store={stoRef.current}>
        {children}
    </Provider>
    );
}