import { Button, Card, Skeleton, Image } from "antd";
import { Product, useFakeStore } from "../../context/useFakeStore";

const { Meta } = Card;
import {
  buttonStyle,
  cardStyle,
  contentStyle,
  imageStyle,
  spanStyle,
} from "./style";

type CardComponentProps = {
  item: Product;
};

export default function CardComponent({ item }: CardComponentProps) {
  const { addToCart, isLoading } = useFakeStore();
  return (
    <Card
      loading={isLoading}
      style={cardStyle}
      cover={<img style={imageStyle} alt={item.title} src={item.image} />}
    >
      <div style={contentStyle}>
        <Meta
          title={item.title}
          description={item.description.substring(0, 100)}
        />
        <span style={spanStyle}>Price: R$ {item.price.toFixed(2)}</span>
        <div
          style={{
            textAlign: "center",
            paddingTop: 24,
          }}
        >
          <Button
            type="default"
            style={buttonStyle}
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}
