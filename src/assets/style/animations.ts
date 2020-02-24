import styled, { keyframes } from 'styled-components';

const FADE_IN = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const FadeIn = styled.div`
  animation-name: ${FADE_IN};
  animation-duration: 1.8s;
`;
