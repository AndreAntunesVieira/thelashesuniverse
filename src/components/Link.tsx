import NextLink from "next/link";
import classNames from "classnames";
import styled from "styled-components";

const Link = ({ href, className, ...props }: any) => (
  <NextLink href={href}>
    <Container
      href={href}
      className={classNames("btn", className)}
      {...props}
    />
  </NextLink>
);

const Container = styled.a``;

export default Link;
