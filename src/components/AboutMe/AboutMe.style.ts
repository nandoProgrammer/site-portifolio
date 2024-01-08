import styled from 'styled-components';

export const SectionAboutMe = styled.section<{background: string}>`
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-position-y: top;
    position: relative;
    top: 0;
`;

export const Emphasis = styled.em`
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
    font-style: normal;
`;

export const Photo = styled.div<{photo: string}>`
    min-width: 35%; 
    max-width: 35%;
    padding: 1rem;
    background: #242424;
    margin-top: -38%;
    margin-left: 65%;
    margin-right: 0;
    height: 90vh;
    z-index: 1;
    background-image: url(${props => props.photo});
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-position-x: end;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
        position: relative;
        min-width: 100%; 
        max-width: 100%;
        margin-top: 0;
        margin-left: 0;
        background-size: contain;
        background-position-x: center;
     }
`;