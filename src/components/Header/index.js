import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/images/logo.svg';

import Button from '~/components/Button';

import { Container, Content, RightMenu } from './styles';

export default function Header() {
  function scrollToSimulation() {
    const element = document.getElementById('simulation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="MeetApp" />
        </Link>

        <RightMenu>
          <Button
            color="#5667F9"
            width="150px"
            type="button"
            onClick={scrollToSimulation}
          >
            Conheça
          </Button>
        </RightMenu>
      </Content>
    </Container>
  );
}
