import { ids } from 'containers/App/constants';

import { Item } from './Item';
import { ContentMainStyled, Header, ItemsWrapper } from './styles';

export const ContentMain = () => (
  <ContentMainStyled>
    <Header>Items</Header>
    <ItemsWrapper>
      {ids.map((id) => (
        <Item id={id} key={id} />
      ))}
    </ItemsWrapper>
  </ContentMainStyled>
);
