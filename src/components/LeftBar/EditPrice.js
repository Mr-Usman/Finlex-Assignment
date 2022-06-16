import * as Styled from "./styles";
import { EditIcon } from "../../assets/icons";

const EditPrice = ({ label }) => {
  return (
    <div>
      <Styled.IconGroup>
        <Styled.DivWrapper>
          <EditIcon />
        </Styled.DivWrapper>
        <Styled.DivWrapper> 
          <Styled.MenuTitle size={"14px"}>{label}</Styled.MenuTitle>
        </Styled.DivWrapper>
      </Styled.IconGroup>
    </div>
  );
};

export default EditPrice;
