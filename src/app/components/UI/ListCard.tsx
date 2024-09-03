import { Project } from "src/app/utils/utils";
import Link from "next/link";
import LikeButton from "./LikeButton";

export default function ListCard({
  author,
  cost,
  projectDescription,
  projectPoster,
  projectId,
  slug,
}: Project) {
  return (
    <>
      <div className="list-card">
        <div className="row row-40">
          <Link href={`/projects/${slug}`}>
            <div className="poster-wrapper overflow-hidden">
              <img className="project-poster" src={projectPoster} />
            </div>
          </Link>
          <div className="row row-20">
            <h2>{author}</h2>
            <h3>{cost}$</h3>
            <div className="col-space--between">
              <p>{projectDescription}</p>
              <LikeButton projectId={projectId} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
