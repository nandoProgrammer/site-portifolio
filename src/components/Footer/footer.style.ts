import styled from 'styled-components';

export const Footer = styled.footer<{background: string}>`
   background-color: ${(props) => props.theme.colors.gray};
   background-image: url(${props => props.background});
   background-repeat: no-repeat;
   background-position-y: center;
   bottom: 0;
   width: 100%;
   position: relative;
   top: 80px;
`;
