import ListCard from "./ListCard";
import { Project } from "src/app/utils/utils";

interface ListProjectProps {
  projects: Project[];
}

export default function ListProject({ projects = [] }: ListProjectProps) {
  return (
    <div className="grid-3">
      {projects.map((item: Project) => (
        <ListCard
          key={item.key}
          projectId={item.key}
          cost={item.cost}
          author={item.author}
          projectDescription={item.projectDescription}
          projectPoster={item.projectPoster}
          linkToPage={item.linkToPage}
          slug={item.slug}
        />
      ))}
    </div>
  );
}
