import React from 'react';
import styled from 'styled-components';

type Props = {
  name: string;
  url: string;
  description: string | null;
  color: string;
  lang: string;
};

const Card: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <Title>{props.name}</Title>
      <Description>{props.description ? props.description : 'TBD'}</Description>
      <LangColor color={props.color} />
      <Lang>{props.lang}</Lang>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% - 30px);
  background: #fff;
  border-radius: 10px;
  box-shadow: -5px 2px 5px #fff, 0px 0px 5px #babecc;
  margin: 30px auto;
  padding: 30px;
  border: solid 1px #000;
  transform: rotate(0);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: solid 1px #000;
    transform: rotate(-0.6deg);
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: solid 1px #000;
    transform: rotate(0.2deg);
  }
`;

const Title = styled.h1`
  font-size: 23px;
`;

const Description = styled.p`
  margin-top: 15px;
  font-size: 16px;
`;

const LangColor = styled.div<{ color: string }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const Lang = styled.span`
  margin-left: 5px;
  font-size: 14px;
`;

export default Card;
