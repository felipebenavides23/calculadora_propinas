import type { TMenuItems } from "../types/type";

type MenuItemsProps = {
  item: TMenuItems;
  addOrder: (item: TMenuItems) => void;
};

export default function MenuItems({ item, addOrder }: MenuItemsProps) {
  return (
    <button
      className="border-2 border-teal-400 w-full my-3 rounded-lg p-3 flex justify-between hover:bg-teal-200"
      onClick={() => addOrder(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}
