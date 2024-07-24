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
      <SubmitButton action="UPDATE" diaryId={Number(id)} />
    </section>
  );
}
