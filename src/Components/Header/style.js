import styled from 'styled-components'

export const HeaderStyle = styled.header`

     padding: 20px 0;
     display: flex;
     flex-direction: row;
     justify-content: space-between;

`;

export const Logo = styled.h1`

     font-size: 40px;
     font-weight: bold;
     color: ${(props) => props.theme.colors.white};

`;


export const Nav = styled.nav`

    display: flex;
    flex-direction: row;

`;

export const ItemLink = styled.a`

    display: flex;
    width: 30px;
    height: 30px;
    background-color: ${(props) => props.theme.colors.white};
    margin: 0 10px;
    border-radius: 50%;
    transition: 1s;
    align-items: center;

    &:hover{
         opacity: 0.5;
         cursor: pointer;
    }

`;
