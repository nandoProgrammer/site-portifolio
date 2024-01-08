import styled from 'styled-components';

export const CardProjetcWrapper = styled.div`
   width: 33%;
   text-transform: uppercase;

   @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
      width: 100%
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