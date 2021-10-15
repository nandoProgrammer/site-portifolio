import styled from 'styled-components'

export const Wrapper = styled.div`

    max-width: 1200px;
    margin: auto;
    padding: 20px 10px;

`;

export const Box = styled.div`
    
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

export const CircleBox = styled.div`

    width: 180px;
    height: 180px;  
    background: blue;
    border-radius: 50%;

    background-image: url('${(props) => props.image}');
    background-size: cover;

`;


export const TitleBox = styled.span`

    margin-top: 20px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;  
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    padding: 0 20px;

`;

export const BarLinksBox = styled.div`

    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 50px;

`;

export const ButtonBox = styled.button`
   
    background: none;
    padding: 10px 40px;
    border: 2px solid ${(props) => props.theme.colors.white};
    border-radius: 30px;
    transition: 1s;
    margin: 0 10px;
    font-size: 20px;
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
    text-decoration: none;

    &:hover{
        opacity: 0.5;
        cursor: pointer;
    }

`;

