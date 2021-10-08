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

    @media(max-width: 800px) {
       font-size: 20px;
    }

`;


export const Nav = styled.nav`

    display: flex;
    flex-direction: row;
    align-items: end;

`;

export const LinkNav = styled.li`

    display: block;

    @media(max-width: 800px) {
        display: none;
    }

`;

export const ItemLink = styled.a`

    display: flex;
    width: 30px;
    height: 30px;
    margin: 0 10px;
    border-radius: 50%;
    transition: 1s;
    align-items: center;
    font-size: 30px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};

    &:hover{
         opacity: 0.5;
         cursor: pointer;
    }

`;


export const ButtonMenuMobile = styled.div`

    display: none;

    @media(max-width: 800px) {
        display:block;
        color: ${(props) => props.theme.colors.white};
    }

`;
