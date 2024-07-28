import { useState } from "react";
import { TOrderItem, TMenuItems, TOrderId } from "../types/type";

export default function useOrder() {
  const [order, setOrder] = useState<TOrderItem[]>([]);
  const [tip, setTip] = useState<number>(0);

  function addOrder(item: TMenuItems) {
    let itemExists: number = order.findIndex(
      (itemOrder) => itemOrder.id === item.id
    );
    if (itemExists !== -1) {
      console.log(itemExists);
      const updateOrder = [...order];
      updateOrder[itemExists].quantity++;
      setOrder(updateOrder);
    } else {
      const newItem: TOrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  }

  function removeItem(id: TOrderId) {
    let updateData = order.filter((item) => item.id !== id);
    setOrder(updateData);
  }

  function placeOrden() {
    setOrder([]);
    setTip(0);
  }

  return {
    order,
    tip,
    setTip,
    addOrder,
    removeItem,
    placeOrden,
  };
}
