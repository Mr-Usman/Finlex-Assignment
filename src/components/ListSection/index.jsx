import * as Styled from "./styles";
import { EditIcon } from "../../assets/icons";

const ListSection = () => {
  return (
    <Styled.ListCard>
      <Styled.ListItemButton>
        <EditIcon />
      </Styled.ListItemButton>
      <Styled.Title>Lorem ipsum</Styled.Title>
      <Styled.Description>
        Lorem Ipsum dsibdsh dsbhbsd bhb hdbsh hs
      </Styled.Description>
    </Styled.ListCard>
  );
};

export default ListSection;
