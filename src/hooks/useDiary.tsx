"use client";

import { DiaryStateContext } from "@/app/providers";
import { MockData } from "@/types/mock";
import { useContext, useEffect, useState } from "react";

export default function useDiary(id: string) {
  const diaryData = useContext(DiaryStateContext);
  const [data, setData] = useState<MockData>();

  useEffect(() => {
    const currentDiary = diaryData.find(
      (item) => String(item.id) === String(id)
    );
    setData(currentDiary);
  }, [id, diaryData]);

  return data;
}
