import { IPortfolioProjectsListFields } from "@cms/types";
import { PortfolioProject } from "..";
import { Container } from "@components/ui";

interface IPortfolioProjectsListProps {
  data: IPortfolioProjectsListFields;
}

const PortfolioProjectsList: React.FC<IPortfolioProjectsListProps> = ({
  data,
}) => {
  const { title, projects } = data;
  return (
    <Container>
      <h2>{title}</h2>
      {projects?.length && (
        <ul className="gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <PortfolioProject key={project.sys.id} data={project.fields} />
          ))}
        </ul>
      )}
    </Container>
  );
};

export default PortfolioProjectsList;
