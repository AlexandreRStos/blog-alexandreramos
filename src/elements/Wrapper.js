import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(280px, 1000px) 1fr;
  padding: 0 1rem;
  background: ${props => props.background && props.theme.colors.bg.default};
`;

export default Wrapper;