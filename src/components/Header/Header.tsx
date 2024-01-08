import React from "react";
import  { HeaderTop } from './Header.style';
import { Nav } from "../../styles/bootstrap";
import { Wrapper, HeadingMd } from '../../styles/bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Header: React.FunctionComponent = () => {
    return (
        <HeaderTop>
            <Wrapper direction={'row'} justify={'space-between'} align={'center'}>
                <HeadingMd>fernando.costa</HeadingMd>
                <Nav>
                    <ul>
                        <li> 
                          <FontAwesomeIcon icon={faLinkedinIn} />
                        </li>
                        <li>
                           <FontAwesomeIcon icon={faGithub} />
                        </li>
                        <li>
                           <FontAwesomeIcon icon={faWhatsapp} />
                        </li>
                    </ul>
                </Nav>
            </Wrapper>
        </HeaderTop>
    )
}