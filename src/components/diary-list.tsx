"use client";

import { DiaryStateContext, DiaryDispatchContext } from "../app/providers";
import { useContext } from "react";
import { MockData } from "@/types/mock";
import Link from "next/link";

export default function DiaryList() {
  const diaryData = useContext(DiaryStateContext);
  const { onDelete } = useContext(DiaryDispatchContext);

  if (!diaryData.length) return <h2>작성된 일기가 없습니다!</h2>;
  return (
    <section>
      {diaryData.map((element: MockData) => (
        <div key={element.id}>
          <Link href={`/${element.id}`}>
            {element.date} | {element.content}
          </Link>
          <Link href={`/edit/${element.id}`}>수정</Link>
          <button onClick={() => onDelete(element.id)}>삭제</button>
        </div>
      ))}
    </section>
  );
}
