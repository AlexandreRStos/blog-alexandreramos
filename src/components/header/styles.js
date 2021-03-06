import styled from 'styled-components';

export const Wrapper = styled.header`
  background: ${props => props.theme.colors.primary};

  padding: 5rem 10vw;
  box-shadow: inset 0px -10px 30px 0px rgba(0, 0, 0, 0.1);
  color: rgba(255, 255, 255, 0.8);
  margin-top: 78px;

  @media (min-width: 600px) {
    margin-top: 47px;
  }

  > * {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
