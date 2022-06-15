import * as Styled from "./styles";
import { EditIcon } from "../../assets/icons";

const EditPrice = ({ label }) => {
  return (
    <div>
      <Styled.IconGroup>
        <div>
          <EditIcon />
        </div>
        <div>
          <Styled.MenuTitle size={"14px"}>{label}</Styled.MenuTitle>
        </div>
      </Styled.IconGroup>
    </div>
  );
};

export default EditPrice;
