import DiaryList from "@/components/diary-list";
import Link from "next/link";

export default function HomePage() {
  // todo :: header에 년월일 추가
  return (
    <main className="">
      <Link href="/new">작성</Link>
      <DiaryList />
    </main>
  );
}
