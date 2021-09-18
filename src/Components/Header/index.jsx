import React from 'react'
import PropTypes from 'prop-types'

import { HeaderStyle, Logo, Nav, ItemLink } from './style';

const Header = (props) => {
    return (
        <HeaderStyle>
          <Logo>
             {props.logo}
          </Logo>
          <Nav>
             {
                props.links.map((item) => (
                    <li><ItemLink><a href={item.link}>{item.name}</a></ItemLink></li>
                ))
             }
          </Nav>
        </HeaderStyle>
    )
}

Header.propTypes = {
    logo: PropTypes.string,
    links: PropTypes.array,
};


export default Header;