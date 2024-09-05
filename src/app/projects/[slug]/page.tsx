import data from "../../data.json";
import { Metadata } from "next";

type SlugParams = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: SlugParams): Promise<Metadata> {
  const projectMetadata = data.data.find((item) => item.slug === params.slug);

  return {
    title: projectMetadata?.author,
    description: projectMetadata?.projectDescription,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const itemData = data.data.find((item) => item.slug === params.slug);
  return (
    <div>
      <h1>Project: {itemData?.author}</h1>
      <p>Полное описание проекта...</p>
    </div>
  );
}
