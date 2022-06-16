import ListSection from "../ListSection";
import * as Styled from "./styles";

const List = ({ productListData }) =>
  productListData.length > 0 &&
  productListData?.map(({ title, description }, index) => {
    return (
      <Styled.Col key={index}>
        <Styled.Card>
          <ListSection title={title} description={description} />
        </Styled.Card>
      </Styled.Col>
    );
  });

export default List;
