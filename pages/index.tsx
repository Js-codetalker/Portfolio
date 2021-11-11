import { Link, Button } from "@components/ui";
import { getPage } from "@cms/api";
import { AppContext, PageContainer } from "@components/common";
import { Blocks } from "@components/blocks";

export const getStaticProps = async () => {
  const page = await getPage("/");
  return {
    props: {
      page: page?.fields,
    },
  };
};

export default function Home({ page }) {
  const { title, blocks } = page;
  return (
    <PageContainer pageTitle={title}>
      <Blocks blocks={blocks} />
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <AppContext.Consumer>
          {({ toggleDarkMode }) => (
            <Button onClick={toggleDarkMode}>Click Me</Button>
          )}
        </AppContext.Consumer>

        <p>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div>
          <a href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <Link isExternal={true} href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Link>

          <a href="https://github.com/vercel/next.js/tree/master/examples">
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
          <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
        </a>
      </footer>
    </PageContainer>
  );
}
