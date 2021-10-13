import styled from 'styled-components'

export const ContainerBoxProjects = styled.div`

   width: 100%;
   padding-top: 50px;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-evenly;

`;

export const BoxProject = styled.div`

   width: 295px;
   height: 397px;
   margin-top: 20px;
   background-image: linear-gradient(90deg, #0808ED 50%, #2667C9 83.37%);
   border-radius: 10px;
   text-align: center;

`;

export const ImageProject = styled.div`

   width: 200px;
   height: 200px;
   background-color: white;
   border-radius: 50%;
   margin: 30px auto 10px auto;

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

export const TitleProject = styled.span`

   font-size: 20px;
   font-weight: 600;
   color: ${(props) => props.theme.colors.white};

`;

export const ButtonLinkProject = styled.button`

   background: linear-gradient(to left, rgba(0, 133, 255, 0.91) 1.11%, rgba(0, 0, 255, 0) 100%); 
   padding: 10px 40px;
   border: 2px solid ${(props) => props.theme.colors.white};
   border-radius: 30px;
   transition: 1s;
   margin: 20px 10px;
   font-size: 20px;
   color: ${(props) => props.theme.colors.white};
   font-weight: bold;
   text-decoration: none;

   &:hover{
      opacity: 0.5;
      cursor: pointer;
   }

` 