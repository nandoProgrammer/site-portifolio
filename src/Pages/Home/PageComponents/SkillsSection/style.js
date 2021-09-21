import styled from 'styled-components'

export const WrapperSkillsButton = styled.nav`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;

`;

export const WrapperSkills = styled.nav`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 100px;

`;

export const ButtonItem = styled.button`
    
    border: 0;
    width: 295px;
    height: 60px;
    margin: 0 40px;
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

export const BoxTechnology = styled.div`
    
    display: flex;
    flex-direction: column;
    width: 295px;
    height: 397px;
    margin: 40px 20px;
    background: linear-gradient(180deg, #0808ED 0%, rgba(8, 8, 237, 0) 100%);
    border-radius: 10px;
    justify-content: center;
    align-items: center;


`;

export const CircleBoxTechnology = styled.div`

    width: 180px;
    height: 180px;  
    background: linear-gradient(180deg, rgba(0, 133, 255, 0.91) 1.11%, rgba(0, 0, 255, 0) 100%);
    border-radius: 50%;

`;


export const TitleTechnology = styled.span`

    margin-top: 20px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;  
    color: ${(props) => props.theme.colors.white};

`;