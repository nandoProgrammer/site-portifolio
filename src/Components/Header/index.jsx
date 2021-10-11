import React, { useState } from 'react'
import PropTypes from 'prop-types'


import { HeaderStyle, Logo, Nav, LinkNav, ItemLink, ButtonMenuMobile } from './style';


const Header = (props) => {

    const [menuMobileStatus, setMenuMobileStatus] = useState(false);

    const actionMenuMobile = () => {
        setMenuMobileStatus(!menuMobileStatus);
    }

    return (
        <>
        <HeaderStyle>
          <Logo>
             {props.logo}
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
        <ul>
            {
                menuMobileStatus ? <h1>ok</h1> : ''
            }
        </ul>
        </>
    )
}

Header.propTypes = {
    logo: PropTypes.string,
};


export default Header;