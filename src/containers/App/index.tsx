import { ContentMain } from 'containers/ContentMain';
import { ContentSideMenu } from 'containers/ContentSideMenu';
import { HeaderMain } from 'containers/HeaderMain';
import { HeaderSideMenu } from 'containers/HeaderSideMenu';

import { StyledApp } from './styles';

export const App = () => (
  <StyledApp>
    <HeaderMain />
    <HeaderSideMenu />
    <ContentMain />
    <ContentSideMenu />
  </StyledApp>
);
