import { Drawer } from "antd";
import BuyComponent from "../Buy";
import Cart from "../Cart";
import TotalPrice from "../TotalPrice";

type DrawerComponentProps = {
  closeDrawer: () => void;
  isOpen: boolean;
};

export default function DrawerComponent({
  closeDrawer,
  isOpen,
}: DrawerComponentProps) {
  return (
    <Drawer
      width={350}
      title="Cart items"
      placement="right"
      onClose={closeDrawer}
      open={isOpen}
      extra={<TotalPrice />}
      footer={<BuyComponent />}
    >
      <Cart />
    </Drawer>
  );
}
