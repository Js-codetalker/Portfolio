import NextLink, { LinkProps as NextLinkProps } from "next/link";
interface LinkProps extends NextLinkProps {
  isExternal?: boolean;
  className?: string;
}

const Link: React.FC<LinkProps> = ({
  href,
  isExternal = false,
  children,
  className,
  ...props
}) => {
  return isExternal ? (
    <a className={className} target="_blank" rel="noreferrer" href={href as string} {...props}>
      {children}
    </a>
  ) : (
    <NextLink href={href}>
      <a className={className} {...props}>{children}</a>
    </NextLink>
  );
};

export default Link;
