import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Typing from 'react-typist';
import { rgba } from 'polished';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Navigation from './Navigation';
import media from '../utils/media';

const Header = styled.header`
  padding: 0 1rem 1rem;
  background-color: ${props => props.background && props.theme.colors.bg.default};
`;

const WrapperTop = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.9);
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(150, 150, 150, 0.1);
  width: 100%;
  z-index: 12000;
  padding: 0.5rem;
  @media ${media.phone.up} {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
  }
`;

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 6rem 1rem 1rem;
  @media ${media.phone.up} {
    flex-direction: row;
  }
`;
const Logotipo = styled.h1`
  font-size: 1.1rem;
  text-align: center;
  margin: 0;
`;
const Rounded = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  border: 3px solid ${props => rgba(props.theme.colors.primary, 0.4)};
  @media ${media.phone.up} {
    margin-right: 1rem;
  }
`;
const Image = styled(Img)`
  border-radius: 50%;
  display: block;
  margin: 0;
  padding: 0;
  transform: scale(0.94) translateY(-1px);
`;
const Headline = styled.h2`
  font-size: ${props => props.theme.fontSize.title};
  padding: 1rem 0 3rem;
  margin-bottom: 0;
  @media ${media.phone.up} {
    padding: 2rem 0;
  }
`;

const HeaderHome = ({ hero }) => (
  <StaticQuery
    query={graphql`
      query {
        avatarImage: file(relativePath: { eq: "alexandre.png" }) {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Header>
        <WrapperTop>
          <Logotipo>
            <Link to="/">Alexandre Ramos</Link>
          </Logotipo>

          <Navigation />
        </WrapperTop>

        {hero && (
          <Hero>
            <Rounded>
              <Image fixed={data.avatarImage.childImageSharp.fixed} alt="Foto Alexandre Ramos" />
            </Rounded>
            <Headline>
              Ola, <br />
              <Typing tyle={{ display: 'inline' }} startDelay={500} cursor={{ hideWhenDone: true }}>
                <span>Sou desenvolvedor Web </span>
                <Typing.Backspace count={18} delay={1250} />
                <span>Front-end </span>
                <Typing.Backspace count={10} delay={1250} />
                <span>Freelancer </span>
              </Typing>
            </Headline>
          </Hero>
        )}
      </Header>
    )}
  />
);

export default HeaderHome;

HeaderHome.propTypes = {
  hero: PropTypes.bool,
};

HeaderHome.defaultProps = {
  hero: false,
};
