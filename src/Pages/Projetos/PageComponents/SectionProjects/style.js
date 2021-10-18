import styled from 'styled-components'

export const ContainerBoxProjects = styled.div`

   width: 100%;
   padding-top: 50px;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-evenly;

`;

export const BoxEmpty = styled.div`
   
   text-align: center;

`;

export const BoxTextEmpty = styled.div`

   padding: 20px;
   margin-top: 20px;
   
`;

export const TextEmpty = styled.span`
    
   font-size: 30px;
   font-weight: bold;
   color: ${(props) => props.theme.colors.white};

`;

