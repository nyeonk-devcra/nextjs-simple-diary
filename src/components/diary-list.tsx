"use client";

import { DiaryStateContext } from "../app/providers";
import { useContext } from "react";
import { MockData } from "@/types/mock";
import Link from "next/link";

export default function DiaryList() {
  const diaryData = useContext(DiaryStateContext);

  if (!diaryData.length) return <h2>작성된 일기가 없습니다!</h2>;
  return (
    <section>
      {diaryData.map((element: MockData) => (
        <div key={element.id}>
          <Link href={`/${element.id}`}>
            {element.date} | {element.content}
          </Link>
        </div>
      ))}
    </section>
  );
}
