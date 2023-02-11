import { Item } from './Item';
import { Header, ItemsWrapper, StyledContentMain } from './styles';

export const ContentMain = () => (
  <StyledContentMain>
    <Header>Items</Header>
    <ItemsWrapper>
      <Item />
      <Item />
      <Item />
    </ItemsWrapper>
  </StyledContentMain>
);
