import React from 'react'
import PropTypes from 'prop-types'


import { HeaderStyle, Logo, Nav, LinkNav, ItemLink, ButtonMenuMobile } from './style';


const Header = (props) => {

    return (
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
          <ButtonMenuMobile>
             <i class="fas fa-ellipsis-v"></i>
          </ButtonMenuMobile>
        </HeaderStyle>
    )
}

Header.propTypes = {
    logo: PropTypes.string,
};


export default Header;