import styled from 'styled-components'

export const Title = styled.h2`

    font-weight: bold;
    font-size: 40px;
    line-height: 49px;
    color: ${(props) => props.theme.colors.white};
    
    @media(max-width: ${(props) => props.theme.breakpoints.md}) {
        font-size: 20px;
    }
`;
