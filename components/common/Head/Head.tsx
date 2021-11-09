import NextHead from "next/head";
interface HeadProps {
  pageTitle: string;
}
const Head: React.FC<HeadProps> = ({ pageTitle }) => {
  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="#" />
      <meta name="keywords" content="#" />
      <meta name="author" content="#" />
    </NextHead>
  );
};
export default Head;
