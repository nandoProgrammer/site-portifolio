import styled from 'styled-components'

export const WrapperSkills = styled.nav`

    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;

export const ButtonItem = styled.button`
    
    border: 0;
    width: 295px;
    height: 60px;
    background: linear-gradient(90deg, #0808ED 50%, #2667C9 83.37%);
    border-radius: 46px;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.white};
    transition: 1s;

    &:hover {

        opacity: 0.5;
        cursor: pointer;

    }

`;