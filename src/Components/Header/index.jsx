import React from 'react'
import PropTypes from 'prop-types'


import { HeaderStyle, Logo, Nav, LinkNav, ItemLink } from './style';
import { Redirect } from 'react-router';

const Header = (props) => {

    const redirect = (url) => {
        window.location.href = url;
    }

    return (
        <HeaderStyle>
          <Logo>
             {props.logo}
          </Logo>
          <Nav>
            <LinkNav>
                <ItemLink onClick={() => redirect('https://github.com/nandoProgrammer')}>
                    <i class="fab fa-github"></i>
                </ItemLink>
            </LinkNav>
            <LinkNav>
                <ItemLink onClick={() => redirect()}>
                    <i class="fab fa-linkedin"></i>
                </ItemLink>
            </LinkNav>
          </Nav>
        </HeaderStyle>
    )
}

Header.propTypes = {
    logo: PropTypes.string,
};


export default Header;