import { menuItems } from "./data/db";
import { OrderContents } from "./components/OrderContents";
import MenuItems from "./components/MenuItems";
import useOrder from "./hooks/useOrder";
import OrderTotal from "./components/OrderTotal";
import { TipPorcentageForm } from "./components/TipPorcentageForm";

function App() {
  const { order, tip, setTip, addOrder, removeItem, placeOrden } = useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de propinas y Consumo
        </h1>
      </header>
      <main className=" max-w-7xl py-20 mx-auto grid md:grid-cols-2 space-x-5">
        <div>
          <h2 className="text-center font-black text-5xl">Menu</h2>
          <div className="mt-10 space-y-3 ">
            {menuItems.map((item) => {
              return (
                <MenuItems key={item.id} item={item} addOrder={addOrder} />
              );
            })}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContents order={order} removeItem={removeItem} />
              <TipPorcentageForm setTip={setTip} tip={tip} />
              <OrderTotal order={order} tip={tip} placeOrden={placeOrden} />
            </>
          ) : (
            <p className="text-center font-bold text-lg">
              No hay ordenes pendientes
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
