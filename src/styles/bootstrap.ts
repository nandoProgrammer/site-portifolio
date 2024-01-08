import styled from 'styled-components';

interface IWrapper {
    direction?: string; 
    justify?: string;
    align?: string;
    responsive?: string
}

interface IParagraph {
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
}

export const Wrapper = styled.div<IWrapper>`
    width: 100%;
    max-width: 1280px;
    margin: auto;
    padding:  ${(props) => props.theme.spacing.sm};
    display: flex;
    flex-direction: ${(props) => props.direction};
    justify-content: ${(props) => props.justify};
    align-items: ${(props) => props.align};
    flex-wrap: wrap;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
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
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    margin-top: ${(props) => props.marginTop ? props.marginTop : '2rem' };
    margin-bottom: ${(props) => props.marginBottom ? props.marginBottom : '2rem' };
    margin-left: ${(props) => props.marginLeft ? props.marginLeft : '0' };
    margin-right: ${(props) => props.marginRight ? props.marginRight : '0' };
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