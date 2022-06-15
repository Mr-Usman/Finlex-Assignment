import * as Styled from "./styles";
import { EditIcon } from "../../assets/icons";

const MenuHeader = () => {
  return (
    <Styled.MenuHeader>
      <Styled.MenuTitle size={"20px"}>Lorem Ipsum</Styled.MenuTitle>
      <Styled.MenuEditIcon>
        <EditIcon />
      </Styled.MenuEditIcon>
    </Styled.MenuHeader>
  );
};

export default MenuHeader;
