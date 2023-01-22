import { Layout, Button, Drawer, Badge } from "antd";

const { Header } = Layout;
import { headerStyle, buttonStyle } from "./style";
import { ShoppingCart } from "phosphor-react";
import { Product, useFakeStore } from "../../context/useFakeStore";


type HeaderComponentProps = {
  showDrawer: () => void;
}

export default function HeaderComponent({showDrawer }: HeaderComponentProps) {
  const {cartItems, getTotalItems} = useFakeStore();

  return (
    <Header style={headerStyle}>
      <h1>Fake Store</h1>
      
      <Button style={buttonStyle} type="ghost" onClick={showDrawer}>
        <ShoppingCart size={32} />
        <Badge count={getTotalItems(cartItems)} showZero color="#f5222d" />
      </Button>
    </Header>
  );
}
