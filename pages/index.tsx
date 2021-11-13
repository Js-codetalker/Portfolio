import { getPage } from "@cms/api";
import { PageContainer } from "@components/common";
import { Blocks } from "@components/blocks";
import { IPageFields } from "@cms/types";
import { Button } from "@components/ui";

export const getStaticProps = async () => {
  const page = await getPage("/");
  return {
    props: {
      page: page,
    },
  };
};

export default function Home({ page }) {
  const { title, blocks } = page.fields as IPageFields;
  return (
    <PageContainer pageTitle={title}>
      <Button>Click me</Button>
      <Blocks blocks={blocks} />
    </PageContainer>
  );
}
