import NotFoundPage from "@/app/not-found";

export default function EditPage({
  params: { id },
}: {
  params: { id: string };
}) {
  if (!Number(id)) return <NotFoundPage />;

  return <div>EditPage</div>;
}
