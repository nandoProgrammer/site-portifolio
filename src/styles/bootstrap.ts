import styled from "styled-components";

interface IWrapper {
  direction?: string;
  justify?: string;
  alignItems?: string;
  responsive?: string;
  gap?: string;
}

interface IParagraph {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  width?: string;
}

export const Wrapper = styled.div<IWrapper>`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  padding: ${(props) => props.theme.spacing.sm};
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
  flex-wrap: wrap;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const HeadingXl = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 88px;
  font-style: normal;
  font-weight: 700;
  line-height: 88px;
  letter-spacing: -2.5px;
`;

export const HeadingLg = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -1.5px;
`;

export const HeadingMd = styled.h5`
  color: ${(props) => props.theme.colors.white};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

export const Paragraph = styled.p<IParagraph>`
  color: ${(props) => props.theme.colors.cream};
  max-width: ${(props) => props.width};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "2rem")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "2rem"};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0")};
`;

export const Nav = styled.nav`
  ul {
    display: flex;
  }

  li {
    display: inline-block;
    color: ${(props) => props.theme.colors.white};
    font-weight: 300;
    font-size: 1.6rem;
    cursor: pointer;
  }

  li + li {
    margin-left: 36px;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const SectionAboutMe = styled.section<{ background: string }>`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position-y: top;
  position: relative;
  top: 0;
`;

export const Emphasis = styled.em`
  background: -webkit-linear-gradient(
    0.9turn,
    ${(props) => props.theme.font.gradient.primary},
    ${(props) => props.theme.font.gradient.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: normal;
`;

export const Photo = styled.div<{ photo: string }>`
  width: 400px;
  height: 400px;
  background: url(${(props) => props.photo}) no-repeat;
  background-size: cover;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.white};
  background-position-x: start;
`;

export const CardProjetcWrapper = styled.div`
  width: 33%;
  padding: 1.5rem;
  height: 450px;
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: 16px;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const Layer = styled.div`
  width: 100%;
  height: 315px;
  position: absolute;
  opacity: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.5);
    transition: 1s;
  }
`;

export const WrapperCardHyperlinks = styled.div`
  width: 100%;
  position: relative;
`;

export const SectionXp = styled.section<{ background: string }>`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: right;
  width: 100%;
`;

export const Card = styled.div`
  width: 24%;
  height: 250px;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 16px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;
