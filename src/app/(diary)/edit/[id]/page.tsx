import NotFoundPage from "@/app/not-found";
import SubmitButton from "@/components/submit-button";

export default function EditPage({
  params: { id },
}: {
  params: { id: string };
}) {
  if (!Number(id)) return <NotFoundPage />;

  return (
    <section>
      <div>EditPage {id}</div>
      <SubmitButton action="CREATE" diaryId={Number(id)} />
    </section>
  );
}
