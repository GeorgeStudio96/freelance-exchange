export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <div>
      <h1>Project: {slug}</h1>
      <p>Полное описание проекта...</p>
    </div>
  );
}
