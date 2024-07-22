"use client";

import { DiaryStateContext, DiaryDispatchContext } from "../app/providers";
import { useContext } from "react";
import { MockData } from "@/type/mock";
import Link from "next/link";

export default function DiaryList() {
  const diaryData = useContext(DiaryStateContext);
  const { onDelete } = useContext(DiaryDispatchContext);

  if (!diaryData.length) return <h2>작성된 일기가 없습니다!</h2>;
  return (
    <section>
      {diaryData.map((element: MockData, index: number) => (
        <li key={element.id}>
          {element.content}
          <Link href={`/edit/${element.id}`}>수정</Link>
          <button onClick={() => onDelete(element.id)}>삭제</button>
        </li>
      ))}
    </section>
  );
}
