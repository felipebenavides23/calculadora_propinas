import type { Dispatch, SetStateAction } from "react";

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPorcentageFormProms = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};

export const TipPorcentageForm = ({ setTip, tip }: TipPorcentageFormProms) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina: </h3>
      <form action="">
        {tipOptions.map((options) => (
          <div key={options.id} className="space-x-2">
            <label htmlFor={options.id}>{options.label}</label>
            <input
              type="radio"
              id={options.id}
              name="tip"
              value={options.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={options.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
};
