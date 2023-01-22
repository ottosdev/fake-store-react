import CartItem from "./CartItem";
import { Divider } from "antd";
import { useFakeStore } from "../../context/useFakeStore";
import { cartStyle, noConentParagrapyStyle, noContentStyle } from "./style";

export default function Cart() {
  const { cartItems } = useFakeStore();

  if (cartItems?.length === 0)
    return (
      <div style={noContentStyle}>
        <p style={noConentParagrapyStyle}>No items added yet!</p>
      </div>
    );

  return (
    <div style={cartStyle}>
      <div>
        {cartItems?.map((item) => (
          <div key={item.id}>
            <CartItem item={item} />
            <Divider />
          </div>
        ))}
      </div>
    </div>
  );
}
