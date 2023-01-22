import { Divider, Drawer, Layout, Space, Typography } from "antd";
import { useState } from "react";
import ContentComponent from "./components/Content";
import DrawerComponent from "./components/Drawer";
import HeaderComponent from "./components/Header";
import SpinComponent from "./components/Spin";
import { useFakeStore } from "./context/useFakeStore";

const { Footer } = Layout;

export default function App() {
  const { isLoading } = useFakeStore();
  const [isOpen, setIsOpen] = useState<boolean>(false);


  function openDrawer() {
    setIsOpen(true);
  }

  function closeDrawer() {
    setIsOpen(false);
  }
  return (
    <Space direction="vertical" style={{ width: "100%", height: "100vh" }}>
      <Layout>
        <HeaderComponent showDrawer={openDrawer} />

        <DrawerComponent closeDrawer={closeDrawer} isOpen={isOpen}/>

        {isLoading && <SpinComponent />}
        <ContentComponent />

        <Footer
          style={{
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Divider />
          <h3>Fake Store React ❤️</h3>
        </Footer>
      </Layout>
    </Space>
  );
}
