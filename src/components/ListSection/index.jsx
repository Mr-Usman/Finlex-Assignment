import * as Styled from "./styles";

const ListSection = ({ title, description, Icon }) => {
  return (
    <Styled.ListCard>
      <Styled.ListItemButton>{Icon}</Styled.ListItemButton>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
    </Styled.ListCard>
  );
};

export default ListSection;
