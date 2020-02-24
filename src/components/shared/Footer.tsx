import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <Container>
      <LinkText target="_blank" href="https://github.com/Ut0n69">
        GitHub
      </LinkText>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  margin: 50px;
`;

const LinkText = styled.a`
  font-size: 18px;
  text-decoration: underline;
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: #000;
  }
`;

export default Footer;
