import React, { useState } from "react";
import { Button, Popconfirm } from "antd";
import { useFakeStore } from "../../context/useFakeStore";

export default function BuyComponent() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { cartItems } = useFakeStore();
  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Popconfirm
        title="Are you sure?"
        description="If you wanna buy, please click OK"
        open={open}
        onConfirm={handleOk}
        okButtonProps={{
          loading: confirmLoading,
          style: { background: "#07D962", width: 64 },
        }}
        onCancel={handleCancel}
        cancelButtonProps={{
          danger: true,
          style: { color: "black", width: 64 },
        }}
      >
        <Button
          type="default"
          style={{
            background: "#07D962",
            color: "white",
            height: 48,
            width: 200,
          }}
          disabled={cartItems.length === 0}
          onClick={showPopconfirm}
        >
          Buy
        </Button>
      </Popconfirm>
    </div>
  );
}
