"use client";

import { InputType } from "@/types/input";
import { MockData } from "@/types/mock";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

interface InputBoxProps {
  initData?: MockData;
  onSubmit: (input: InputType) => void;
}

export default function InputBox(props: InputBoxProps) {
  const { initData, onSubmit } = props;
  const [input, setInput] = useState({
    createdDate: initData ? new Date(initData.date) : new Date(),
    content: initData ? initData.content : "",
  });
  const router = useRouter();

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(initData.date),
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
        <button>취소</button>
        <button
          onClick={() => {
            onSubmit(input);
            alert("일기 작성 완료!");
            router.push("/");
          }}
        >
          작성 완료
        </button>
      </div>
    </section>
  );
}
// Todo :: nextJS 뒤로 돌아가기 관련 규칙있는지 찾아보기
