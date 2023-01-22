import { Button, Divider, Image, Typography } from "antd";
import { Product, useFakeStore } from "../../../context/useFakeStore";
import {container, describe, addAndRemoveItems, imageStyle} from './style'

const { Text, Title,Paragraph } = Typography;

type CartItemProps = {
  item: Product;
}

export default function CartItem({item}: CartItemProps) {
  const {addToCart, removeToCart} = useFakeStore()
  return (
    <div style={container}>
      <Image
        style={imageStyle}
        src={item.image}
      />
      <div style={describe}>
        <Title level={5}>{item.title}</Title>
        <Paragraph>Price: R$ {item.price.toFixed(2)}</Paragraph>
        <div style={{display: "flex", justifyContent: 'flex-end', width: '100%'}}>
        <Text strong>Total: <span style={{ color: "#67159C" }}>R${(item.price * item.amount).toFixed(2)}</span></Text>
        </div>
   
      </div>

      <div style={addAndRemoveItems}>
        <Button onClick={() => removeToCart(item.id)}>-</Button>
        <Text>{item.amount}</Text>
        <Button onClick={() => addToCart(item)}>+</Button>
      </div>
    </div>
  );
}
