import ListCard from "./ListCard";
import dataJson from "../../data.json";
import { Project } from "src/app/utils/utils";

export default function ListProject() {
  return (
    <div className="grid-3">
      {dataJson.data.map((item: Project) => (
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
