import { Container } from "@components/ui";
import { Head, AppContext } from "..";

interface PageContainerProps {
  pageTitle: string;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  pageTitle,
}) => {
  return (
    <AppContext.Consumer>
      {({ darkMode }) => (
        <div className={darkMode ? "dark" : ""}>
          <Container
            className="dark:text-white dark:bg-black"
            useDefault={false}
          >
            <Head pageTitle={pageTitle} />
            {children}
          </Container>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default PageContainer;
