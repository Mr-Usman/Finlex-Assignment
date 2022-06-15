import * as Styled from "./styles";
import { EditIcon } from "../../assets/icons";

const ListSection = ({ title, description }) => {
  return (
    <Styled.ListCard>
      <Styled.ListItemButton>
        <EditIcon />
      </Styled.ListItemButton>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
    </Styled.ListCard>
  );
};

export default ListSection;
