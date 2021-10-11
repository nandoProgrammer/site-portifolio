import styled from 'styled-components'

export const Section = styled.section`
    
    width: 100%;
    height: 100%;
    margin: 100px 0;

`;

export const ContentSectionAboutMe = styled.div`

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media(max-width: 800px) {
        flex-direction: column;
    }
    
`;

export const TextContent = styled.div`

    width: 100%;
    height: 100%;  
    padding: 0; 
    padding: 100px 100px 100px 0;

    @media(max-width: 800px) {
        padding: 0;
    }

`;

export const TextAboutMeTitle = styled.span`

    font-size: 30px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
    

`;


export const TextAboutMeParagraph = styled.p`

    font-size: 20px;
    margin-top: 45px;
    color: ${(props) => props.theme.colors.white};

`;

export const ButtonSkills = styled.button`
    display: block;
    width: 400px;
    height: 63px;
    border: 0;
    margin: 60px auto 0 auto;

    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.white};

    background: linear-gradient(90deg, #0808ED 50%, #2667C9 83.37%);
    border-radius: 46px;
    transition: 1s;

    &:hover{
        opacity: 0.5;
        cursor: pointer;
    }

    @media(max-width: 800px) {
        width: 250px;
        height: 50px;
        font-size: 15px;
    }

   

`;

export const FrameBigger = styled.div`
    
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;

    width: 668px;
    height: 630px;  
    background: linear-gradient(180deg, #0808ED 0%, rgba(8, 8, 237, 0) 100%);
    border-radius: 10px;

    @media(max-width: 800px) {
        display: none;
    }
   
`;

export const CircleBigger = styled.div`
   
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 350px;
    background: linear-gradient(180deg, #C4C4C4 0%, rgba(196, 196, 196, 0) 100%);
    border-radius: 50%;

`;

export const CircleSmall = styled.div`
   
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    background: #C4C4C4;
    border-radius: 50%;

`;

