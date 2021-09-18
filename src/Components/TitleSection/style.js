import styled from 'styled-components'

export const Title = styled.h2`

    font-weight: bold;
    font-size: 40px;
    line-height: 49px;
    color: ${(props) => props.theme.colors.white};
 
`;

export const Round = styled.h2`

    width: 22px;
    height: 22px;
    border-radius: 50%;
    color: ${(props) => props.theme.colors.white};

`;