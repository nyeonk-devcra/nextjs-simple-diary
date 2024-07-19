import NotFoundPage from "@/app/not-found";

export default function DiaryPage({
  params: { id },
}: {
  params: { id: string };
}) {
  if (!Number(id)) return <NotFoundPage />;
  console.log(!Number(id));
  return <div>DiaryDetail</div>;
}
