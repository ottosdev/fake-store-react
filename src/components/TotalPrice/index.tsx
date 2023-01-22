import { useFakeStore } from "../../context/useFakeStore";

export default function TotalPrice() {
  const { getTotalPrice } = useFakeStore();
  const totalPrice = getTotalPrice();
  return (
    <>
      <h4>
        Total: <span style={{ color: "#67159C" }}>R${totalPrice}</span>
      </h4>
    </>
  );
}
