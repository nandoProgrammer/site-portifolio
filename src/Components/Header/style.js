import styled from 'styled-components'

export const HeaderStyle = styled.header`

     padding: 20px 0;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     user-select: none;

`;

export const Logo = styled.a`

    font-size: 40px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;

    h1{
        font-size: 35px;
    }

    span{
        color: #0808ED;
    }

    h2{
        font-size: 25px;
    }



    @media(max-width: ${(props) => props.theme.breakpoints.md}) {
        h1{
            font-size: 20px;
        }
    
        h2{
            font-size: 15px;
        }
    }

`;


export const Nav = styled.nav`

    display: flex;
    flex-direction: row;
    align-items: center;

`;

export const LinkNav = styled.li`

    display: block;

    @media(max-width: ${(props) => props.theme.breakpoints.md}) {
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

    @media(max-width: ${(props) => props.theme.breakpoints.md}) {
        display:block;
        color: ${(props) => props.theme.colors.white};
    }

`;

export const NavMobile = styled.ul`
   display: none;

   @media(max-width: ${(props) => props.theme.breakpoints.md}) {
      display:block;
      color: ${(props) => props.theme.colors.white};
   }
`;

export const LinkMobileItem = styled.li`

   max-width: 200px;
   display: block;
   margin: 10px auto;
   
`;

export const Link = styled.a`

   display: block;
   width: 100%;
   
   background-color: ${(props) => props.theme.colors.white};
   border-radius: 30px;
   color: #000;
   padding: 10px 20px;
   text-align: center;

`;

