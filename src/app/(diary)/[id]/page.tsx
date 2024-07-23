import NotFoundPage from "@/app/not-found";

export default function DiaryPage({
  params: { id },
}: {
  params: { id: string };
}) {
  if (!Number(id)) return <NotFoundPage />;

  return <section></section>;
}
