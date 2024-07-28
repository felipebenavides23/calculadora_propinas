export type TMenuItems = {
  id: number;
  name: string;
  price: number;
};

export type TOrderItem = TMenuItems & {
  quantity: number;
};

export type TOrderId = TMenuItems["id"];
