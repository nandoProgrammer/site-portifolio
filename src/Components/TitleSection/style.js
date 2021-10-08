import styled from 'styled-components'

export const Title = styled.h2`

    font-weight: bold;
    font-size: 40px;
    line-height: 49px;
    color: ${(props) => props.theme.colors.white};
    
    @media(max-width: 800px) {
        font-size: 20px;
    }
`;
