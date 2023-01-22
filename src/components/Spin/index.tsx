import { Space, Spin } from "antd";
import { spinContainer } from "./style";


export default function SpinComponent() {
  return (
    <Space direction="vertical"  style={spinContainer}>
      <Space>
        <Spin tip="Loading" size="large" >
          <div className="content" />
        </Spin>
      </Space>
    </Space>
  );
}
