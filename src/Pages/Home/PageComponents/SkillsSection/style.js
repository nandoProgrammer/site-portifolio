import styled from 'styled-components'

export const WrapperSkillsButton = styled.nav`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;

    @media(max-width: 800px) {
        flex-direction: row;
        flex-wrap: nowrap;
    }

`;

export const WrapperSkills = styled.nav`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 50px;

`;

export const ButtonItem = styled.button`
    
    border: 0;
    width: 295px;
    height: 60px;
    margin: 0 40px;
    background-image: linear-gradient(90deg, #0808ED 50%, #2667C9 83.37%);
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

    @media(max-width: 800px) {
        width: 90px;
        height: 30px;
        font-size: 10px;
        margin: 0 5px;
    }

`;

export const ButtonActive = styled(ButtonItem)`

    box-shadow: 10px 2px 0px white; 

`;

