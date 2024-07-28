import { useMemo } from "react";
import { TOrderItem } from "../types/type";
import { formatCurrency } from "../helpers";

type TOrderTotalProps = {
  order: TOrderItem[];
  tip: number;
  placeOrden: () => void;
};

export default function OrderTotal({
  order,
  tip,
  placeOrden,
}: TOrderTotalProps) {
  const subTotalOrder = useMemo(
    () =>
      order.reduce(
        (total, itemOrder) => total + itemOrder.quantity * itemOrder.price,
        0
      ),
    [order]
  );

  const propinas = useMemo(() => subTotalOrder * tip, [tip, order]);
  const total = useMemo(() => subTotalOrder + propinas, [tip, order]);

  return (
    <>
      <div className="space-y-3">
        <h2 className=" text-2xl font-black">Totales y Propinas</h2>
        <p>
          Subtotal apagar{" "}
          <span className="font-black"> {formatCurrency(subTotalOrder)}</span>
        </p>
        <p>
          Propinas{" "}
          <span className="font-black"> {formatCurrency(propinas)}</span>
        </p>
        <p>
          Total aPagar{" "}
          <span className="font-black"> {formatCurrency(total)}</span>
        </p>
      </div>

      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-20"
        disabled={total === 0}
        onClick={placeOrden}
      >
        Guardar Orden
      </button>
    </>
  );
}
