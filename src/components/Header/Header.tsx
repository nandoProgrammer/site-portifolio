import React from "react";
import  { HeaderTop } from './Header.style';
import { Nav } from "../../styles/bootstrap";
import { Wrapper, HeadingMd } from '../../styles/bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const redirectTo = (url: string) => setTimeout(() => {
    window.open(url, '_blank');
}, 1000);

export const Header: React.FunctionComponent = () => {
    return (
        <HeaderTop>
            <Wrapper direction={'row'} justify={'space-between'} align={'center'}>
                <HeadingMd>fernando.costa</HeadingMd>
                <Nav>
                    <ul>
                        <li onClick={() => redirectTo('https://www.linkedin.com/in/fernando-pereira-costa')}> 
                          <FontAwesomeIcon icon={faLinkedinIn} />
                        </li>
                        <li onClick={() => redirectTo('https://github.com/nandoProgrammer')}>
                           <FontAwesomeIcon icon={faGithub} />
                        </li>
                        <li onClick={() => redirectTo('https://wa.me/5587999289850')}>
                           <FontAwesomeIcon icon={faWhatsapp} />
                        </li>
                    </ul>
                </Nav>
            </Wrapper>
        </HeaderTop>
    )
}