import DiaryList from "@/components/diary-list";
import Link from "next/link";
import Button from "@/components/common/button";

export default function HomePage() {
  // todo :: header에 년월일 추가
  return (
    <main className="w-full">
      <Link href="/new" className="flex justify-center m-2 h-10 w-3/4">
        <Button name="일기 작성" />
      </Link>
      <DiaryList />
    </main>
  );
}
