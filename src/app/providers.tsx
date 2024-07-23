"use client";

import { useReducer, ReactNode, useRef, createContext } from "react";
import { reducer } from "./reducer";
import { mockData } from "../types/mock";

interface ProvidersProps {
  children: ReactNode;
}

interface DiaryState {
  id: number;
  date: string;
  content: string;
}

interface DiaryDispatch {
  onCreate: (date: string, content: string) => void;
  onUpdate: (id: number, date: string, content: string) => void;
  onDelete: (id: number) => void;
}

export const DiaryStateContext = createContext<DiaryState[]>([]);
export const DiaryDispatchContext = createContext<DiaryDispatch>({
  onCreate: () => {},
  onUpdate: () => {},
  onDelete: () => {},
});

export function Providers({ children }: ProvidersProps) {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  const onCreate = (date: string, content: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        date,
        content,
      },
    });
  };

  const onUpdate = (id: number, date: string, content: string) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        date,
        content,
      },
    });
  };

  const onDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onUpdate,
          onDelete,
        }}
      >
        {children}
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}
