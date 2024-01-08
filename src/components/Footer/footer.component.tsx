import React from 'react';

import { HeadingMd, Nav, Separator } from '../../styles/bootstrap';
import { Footer } from './footer.style';
import { Wrapper, HeadingLg, Paragraph } from '../../styles/bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const circlesLeft = require('../../assets/circles-left.png');

export const FooterComponent: React.FunctionComponent = () => {
    return (
        <Footer background={circlesLeft}>
           <Wrapper direction={'row'} justify={'space-between'}>
              <div>
                 <HeadingLg>Contato</HeadingLg>
                 <Paragraph>I would love to hear about your project and how I could help. <br/> Please fill in the form, and I’ll get back to you as soon as possible.</Paragraph>
              </div>
              <div>
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