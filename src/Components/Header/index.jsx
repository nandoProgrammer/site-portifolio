import React, { useState } from 'react'

import { 
    HeaderStyle, 
    Logo, 
    Nav, 
    LinkNav, 
    ItemLink, 
    ButtonMenuMobile,
    NavMobile,
    LinkMobileItem, 
    Link
} from './style';


const Header = (props) => {

    const [menuMobileStatus, setMenuMobileStatus] = useState(false);

    const actionMenuMobile = () => {
        setMenuMobileStatus(!menuMobileStatus);
    }

    return (
        <>
        <HeaderStyle>
          <Logo href="/">
             Fernando Costa
          </Logo>
          <Nav>
            <LinkNav>
                <ItemLink href="https://github.com/nandoProgrammer">
                    <i class="fab fa-github"></i>
                </ItemLink>
            </LinkNav>
            <LinkNav>
                <ItemLink href="#">
                    <i class="fab fa-linkedin"></i>
                </ItemLink>
            </LinkNav>
          </Nav>
          <ButtonMenuMobile onClick={actionMenuMobile}>
             <i class="fas fa-bars"></i>
          </ButtonMenuMobile>
        </HeaderStyle>
        
            {
                menuMobileStatus ? 
                <NavMobile>
                   <LinkMobileItem>
                     <Link href="#">
                        <i class="fab fa-github"></i>
                     </Link>
                   </LinkMobileItem>
                   <LinkMobileItem>
                      <Link>
                         <i class="fab fa-linkedin"></i>
                      </Link>
                   </LinkMobileItem>
                </NavMobile> 
                : null
            }
     
        </>
    )
}



export default Header;