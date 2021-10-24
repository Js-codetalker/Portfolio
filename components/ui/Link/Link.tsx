import NextLink, { LinkProps as NextLinkProps } from "next/link";
interface LinkProps extends NextLinkProps {
  isExternal?: boolean;
}

const Link: React.FC<LinkProps> = ({
  href,
  isExternal = false,
  children,
  ...props
}) => {
  return isExternal ? (
    <a target="_blank" rel="noreferrer" href={href as string} {...props}>
      {children}
    </a>
  ) : (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  );
};

export default Link;
