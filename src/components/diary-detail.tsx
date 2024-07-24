"use client";

import { DiaryDispatchContext } from "@/app/providers";
import useDiary from "@/hooks/useDiary";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function DiaryDetail({ id }: { id: string }) {
  const diaryData = useDiary(id);
  const { onDelete } = useContext(DiaryDispatchContext);
  const router = useRouter();

  return (
    <div>
      <h3>날짜</h3>
      <div>{diaryData?.date}</div>
      <h3>일기</h3>
      <div>{diaryData?.content}</div>
      <br />
      <div>
        <Link href="/">취소</Link>
        <Link href={`/edit/${id}`}>수정</Link>
        <button
          onClick={() => {
            onDelete(Number(id));
            alert("일기가 삭제되었습니다..😞");
            router.push("/");
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
}
