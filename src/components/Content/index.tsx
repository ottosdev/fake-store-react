import { Col, Layout, Row } from "antd";
import { useFakeStore } from "../../context/useFakeStore";
import CardComponent from "../Card";
import "./style.css"


export default function ContentComponent() {
  const { cart } = useFakeStore();
  return (

      <Row className="contentStyle">
        {cart?.map((item) => (
          <Col key={item.id} style={{paddingBottom: 20}} sm={16} md={12} lg={8} xl={6} >
            <CardComponent item={item} />
          </Col>
        ))}
      </Row>
 
  );
}
