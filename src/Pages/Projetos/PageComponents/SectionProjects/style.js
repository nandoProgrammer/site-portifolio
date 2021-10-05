import styled from 'styled-components'

export const BoxProject = styled.div`

   width: 300px;
   height: 400px;
   background-image: linear-gradient(90deg, #0808ED 50%, #2667C9 83.37%);
   border-radius: 10px;

`;

export const BoxEmpty = styled.div`
   
   text-align: center;

`;

export const TextEmpty = styled.span`
    
   font-size: 30px;
   font-weight: bold;
   color: ${(props) => props.theme.colors.white};

`;