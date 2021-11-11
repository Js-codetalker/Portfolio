import { IPortfolioProjectsListFields } from "@cms/types";

interface IPortfolioProjectsListProps {
  data: IPortfolioProjectsListFields;
}

const PortfolioProjectsList: React.FC<IPortfolioProjectsListProps> = ({
  data,
}) => {
  const { title, projects } = data;
  return (
    <section>
      <h1>{title}</h1>
    </section>
  );
};

export default PortfolioProjectsList;
