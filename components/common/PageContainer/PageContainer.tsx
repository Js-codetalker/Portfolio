import { Container } from "@components/ui";
import { Head } from "..";

interface PageContainerProps {
  pageTitle: string;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  pageTitle,
}) => {
  return (
    <Container useDefault={false}>
      <Head pageTitle={pageTitle} />
      {children}
    </Container>
  );
};

export default PageContainer
