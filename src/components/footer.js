import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "linaria/react";

const Footer = () => (
  <Wrapper>
    <Container className="container">
      <div className="row v-align-center">
        <div className="col col-6 center-text tablet-align-text-left">
          <h2 className="navbar-title">Tony Diaz</h2>
        </div>
        <div className="col col-6 center-text tablet-align-text-left">
          <div className="row mobile align-center tablet-align-right">
            <div className="menu-item">
              <MenuLink href="mailto:td@tonydiaz.me" aria-label="Email link">
                <FontAwesomeIcon icon="envelope" />
              </MenuLink>
            </div>
            <div className="menu-item">
              <MenuLink
                href="https://github.com/tonydiaz"
                aria-label="Github link"
              >
                <FontAwesomeIcon icon={["fab", "github"]} id="github-icon" />
              </MenuLink>
            </div>
            <div className="menu-item">
              <MenuLink
                href="https://linkedin.com/in/anthonydiaz"
                aria-label="LinkedIn link"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  id="linkedin-icon"
                />
              </MenuLink>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  background: rgb(37, 72, 100);
  color: white;
`;

const Container = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
`;

const MenuLink = styled.a`
  padding: 12px !important;
  font-size: 26px !important;
`;

export default Footer;
