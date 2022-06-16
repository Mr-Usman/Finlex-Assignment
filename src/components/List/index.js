import ListSection from "../ListSection";
import * as Styled from "./styles";

const List = ({ productListData }) =>
  productListData.length > 0 &&
  productListData?.map(({ title, description, icon }, index) => {
    return (
      <Styled.Col key={index}>
        <Styled.Card>
          <ListSection title={title} description={description} Icon={icon} />
        </Styled.Card>
      </Styled.Col>
    );
  });

export default List;
