import styled from 'styled-components';

export const SectionXp = styled.section<{background: string}>`
   background-image: url(${props => props.background});
   background-repeat: no-repeat;
   background-position-y: center;
   background-position-x: right;
   width: 100%;
`;

export const Card = styled.div`
   width: 33%;
   padding: 1rem 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
      width: 100%
   }
`;