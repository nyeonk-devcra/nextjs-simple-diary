import NotFoundPage from "@/app/not-found";
import DiaryDetail from "@/components/diary-detail";

export default function DiaryPage({
  params: { id },
}: {
  params: { id: string };
}) {
  if (!Number(id)) return <NotFoundPage />;

  return (
    <section>
      <DiaryDetail id={id} />
    </section>
  );
}
