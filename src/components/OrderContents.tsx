import { formatCurrency } from "../helpers";
import { TOrderItem, TOrderId } from "../types/type";

type TOrderContentProps = {
  order: TOrderItem[];
  removeItem: (id: TOrderId) => void;
};

export const OrderContents = ({ order, removeItem }: TOrderContentProps) => {
  return (
    <div>
      <h2 className="text-center font-black text-5xl">Consumo</h2>
      <div className="space-y-3 mt-10 ">
        {order.map((item) => (
          <div
            key={item.id}
            className=" flex justify-between items-center border-t border-b-slate-400 p-5 last-of-type:border-b"
          >
            <div>
              <p className="text-lg">
                {" "}
                {item.name} -{formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad:{item.quantity} - Total Producto:
                {formatCurrency(item.quantity * item.price)}
              </p>
            </div>

            <button
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
