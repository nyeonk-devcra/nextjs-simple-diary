"use client";

import { InputType } from "@/types/input";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

interface InputBoxProps {
  initData?: InputType;
  onSubmit: (input: InputType) => void;
}

/*
  todo :: 어떤 페이지냐에 따라 버튼 다르게 띄우기
  create : 취소 및 작성 버튼
  update : 취소 및 작성 버튼
  diary detail: 취소 및 수정/삭제 버튼
*/

export default function InputBox(props: InputBoxProps) {
  const { initData, onSubmit } = props;
  const [input, setInput] = useState({
    createdDate: initData ? new Date(initData.createdDate) : new Date(),
    content: initData ? initData.content : "",
  });
  // const [input, setInput] = useState({
  //   createdDate: new Date(),
  //   content: "",
  // });

  useEffect(() => {
    if (initData) {
      console.log("있냐?", initData);
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const onchangeInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;

    if (name === "createdDate") {
      value = new Date(value) as unknown as string;
    }
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <section>
      <div>
        <h3>오늘의 날짜</h3>
        <input
          name="createdDate"
          onChange={onchangeInput}
          value={input.createdDate.toISOString().split("T")[0]}
          type="date"
        />
      </div>
      <div>
        <h3>일기</h3>
        <textarea
          name="content"
          onChange={onchangeInput}
          value={input.content}
          placeholder="오늘의 일기를 작성해주세요 :)"
        />
      </div>
      <div>
        <button>취소하기</button>
        <button onClick={() => onSubmit(input)}>작성 완료</button>
        <Link href="/">홈으로</Link>
      </div>
    </section>
  );
}
// Todo :: nextJS 뒤로 돌아가기 관련 규칙있는지 찾아보기
