import { IPortfolioProjectsListProjectFields } from "@cms/types";
import { Image } from "@components/ui";
import { usePortfolioModal } from "..";
import css from "./PortfolioProject.module.scss";

interface PortfolioProjectProps {
  data: IPortfolioProjectsListProjectFields;
}

const PortfolioProject: React.FC<PortfolioProjectProps> = ({ data }) => {
  const {
    title,
    description,
    githubLink,
    previewLink,
    images,
    video,
    technologies,
    buttonText,
  } = data;
  const [toggleModal, ProjectModal] = usePortfolioModal();
  const assets = [...images];
  if (video) assets.push(video);

  return (
    <>
      <li>
        <div className={css.project}>
          {images && (
            <Image
              key={images[0].sys.id}
              src={images[0].fields.file.url}
              alt={images[0].fields.title ?? ""}
              className={css.image}
            />
          )}
          <div className={css.info}>
            <h4 className="">{title}</h4>
            <button onClick={toggleModal}>{buttonText}</button>
          </div>
        </div>
      </li>
      <ProjectModal
        githubLink={githubLink}
        previewLink={previewLink}
        technologies={technologies}
        assets={assets}
        description={description}
      />
    </>
  );
};

export default PortfolioProject;
