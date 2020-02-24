import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY } from '@/graphql/fields/github/query';
import Card from '@/components/pages/Top/Card';
import Footer from '@/components/shared/Footer';
import { Centering } from '@/assets/style/styledComponentsHelper';
import { FadeIn } from '../assets/style/animations';

const Top: React.FC = () => {
  const { data, loading, error } = useQuery(GET_REPOSITORY);

  if (error) return <Centering>Something went wrong ...</Centering>;
  if (loading) return <Centering>Loading ...</Centering>;
  return (
    <FadeIn>
      <Title>Ut0n's Repositories</Title>
      {data &&
        data.viewer.repositories.nodes.map((repository: any, i: number) => (
          <Card
            key={i}
            name={repository.name}
            url={repository.url}
            description={repository.description}
            color={repository.primaryLanguage.color}
            lang={repository.primaryLanguage.name}
          />
        ))}
      <Footer />
    </FadeIn>
  );
};

const Title = styled.h1`
  text-align: center;
  margin: 12px;
`;

export default Top;
