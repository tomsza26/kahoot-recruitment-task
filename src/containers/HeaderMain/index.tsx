import logo from 'images/logo.png';

import { Header, Logo, StyledHeaderMain } from './styles';

export const HeaderMain = () => (
  <StyledHeaderMain>
    <Logo alt="Kahoot!" src={logo} /> <Header>Points.</Header>
  </StyledHeaderMain>
);
