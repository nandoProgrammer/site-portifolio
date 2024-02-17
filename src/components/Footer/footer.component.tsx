import React from 'react';

import { HeadingMd, Nav, Separator } from '../../styles/bootstrap';
import { Footer } from './footer.style';
import { Wrapper, HeadingLg, Paragraph } from '../../styles/bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const circlesLeft = require('../../assets/circles-left.png');

const redirectTo = (url: string) => setTimeout(() => {
   window.open(url, '_blank');
}, 1000);

export const FooterComponent: React.FunctionComponent = () => {
    return (
        <Footer background={circlesLeft}>
           <Wrapper direction={'row'} justify={'space-between'}>
              <div>
                 <HeadingLg>Contato</HeadingLg>
                 <Paragraph>Eu adoraria ouvir sobre seu projeto e como posso ajudar.</Paragraph>
              </div>
              <div>
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
              </div>
           </Wrapper>
           <Wrapper>
             <Separator/>
           </Wrapper>
           <Wrapper direction={'row'} justify={'center'} align={'center'}>
                <HeadingMd>fernando.costa</HeadingMd>
           </Wrapper>
        </Footer>
    )
}