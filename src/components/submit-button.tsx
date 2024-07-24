"use client";

import { DiaryDispatchContext } from "@/app/providers";
import { useContext } from "react";
import InputBox from "./common/input-box";
import { InputType } from "@/types/input";
import useDiary from "../hooks/useDiary";

interface submitButtonProps {
  action: string;
  diaryId?: number;
}

export default function SubmitButton(props: submitButtonProps) {
  const { action, diaryId } = props;
  const { onCreate, onUpdate } = useContext(DiaryDispatchContext);
  const initData = useDiary(String(diaryId));

  const actionHandler = (input: InputType) => {
    switch (action) {
      case "CREATE":
        return onCreate(
          input.createdDate.toISOString().split("T")[0],
          input.content
        );
      case "UPDATE":
        if (!diaryId) return;
        return onUpdate(
          diaryId,
          input.createdDate.toISOString().split("T")[0],
          input.content
        );
      default:
        return;
    }
  };

  return (
    <section>
      <InputBox onSubmit={actionHandler} initData={initData} />
    </section>
  );
}
