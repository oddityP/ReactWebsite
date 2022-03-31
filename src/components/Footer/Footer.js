import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaMagento } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { FooterContainer, FooterSubHeading, FooterSubscription, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcon, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {
  return (
      <FooterContainer>
          <FooterSubscription>
              <FooterSubHeading>
                  Become a member of our growing community of language learners and receive tons of helpful resources and practice material. Bonus, you get to connect with like-minded people and work together toward your goals!
              </FooterSubHeading>
              <FooterSubText>You can unsubscribe at any time</FooterSubText>
              <Form>
                  <FormInput name="email" type="email" placeholder="Your email" />
                      <Button fontBig>Subscribe</Button>
              </Form>
          </FooterSubscription>
          <FooterLinksContainer>
              <FooterLinksWrapper>
                  <FooterLinksItems>
                      <FooterLinkTitle>About Us</FooterLinkTitle>
                      <FooterLink to='/'>How it works</FooterLink>
                      <FooterLink to='/'>Testimonials</FooterLink>
                      <FooterLink to='/'>Careers</FooterLink>
                      <FooterLink to='/'>Terms of Service</FooterLink>
                  </FooterLinksItems>
                  <FooterLinksItems>
                      <FooterLinkTitle>Contact Us</FooterLinkTitle>
                      <FooterLink to='/'>How it works</FooterLink>
                      <FooterLink to='/'>Testimonials</FooterLink>
                      <FooterLink to='/'>Careers</FooterLink>
                      <FooterLink to='/'>Terms of Service</FooterLink>
                  </FooterLinksItems>
                  </FooterLinksWrapper>
                  <FooterLinksWrapper>
                  <FooterLinksItems>
                      <FooterLinkTitle>Videos</FooterLinkTitle>
                      <FooterLink to='/'>How it works</FooterLink>
                      <FooterLink to='/'>Testimonials</FooterLink>
                      <FooterLink to='/'>Careers</FooterLink>
                      <FooterLink to='/'>Terms of Service</FooterLink>
                  </FooterLinksItems>
                  <FooterLinksItems>
                      <FooterLinkTitle>Social Media</FooterLinkTitle>
                      <FooterLink to='/'>How it works</FooterLink>
                      <FooterLink to='/'>Testimonials</FooterLink>
                      <FooterLink to='/'>Careers</FooterLink>
                      <FooterLink to='/'>Terms of Service</FooterLink>
                  </FooterLinksItems>
              </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
              <SocialMediaWrap>
                  <SocialLogo to="/">
                      <SocialIcon />
                      ULTRA
                  </SocialLogo>
                  <WebsiteRights>ULTRA 2022</WebsiteRights>
                  <SocialIcons>
                      <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                          <FaFacebook />
                      </SocialIconLink>
                      <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                          <FaInstagram />
                      </SocialIconLink>
                      <SocialIconLink href={'/https://www.youtube.com/channel/UCb0xfM3HGOsqPYNAocXXNAQ'} target="_blank" aria-label="YouTube" rel="noopener noreferrer">
                          <FaYoutube />
                      </SocialIconLink>
                      <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                          <FaTwitter />
                      </SocialIconLink>
                      <SocialIconLink href='/' target="_blank" aria-label="LinkedIn">
                          <FaLinkedin />
                      </SocialIconLink>
                  </SocialIcons>
              </SocialMediaWrap>
          </SocialMedia>
      </FooterContainer>
  );
};

export default Footer;