import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

interface PROPSVALUE {
  valueInput?: boolean;
  title: string;
  value: string | number;
}

export const CardInputAndOutput = ({
  valueInput,
  title,
  value
}: PROPSVALUE) => (
  <div
    className={`flex items-center justify-around  border-white bg-white w-1/2 rounded-lg h-20 ${
      valueInput ? "mr-1" : "ml-1"
    }`}
  >
    <div className="rounded-person h-8 w-8 bg-white flex items-center justify-center">
      {valueInput ? (
        <AiOutlineArrowUp size={20} color="#22c55e" />
      ) : (
        <AiOutlineArrowDown size={20} color="#dc2626" />
      )}
    </div>
    <div className="mx-2 text-center">
      <h1
        className={`font-Nunito text-sm font-bold ${
          valueInput ? "text-green-500" : "text-red-500"
        } `}
      >
        {title}
      </h1>
      <strong
        className={`font-Nunito text-sm font-extrabold ${
          valueInput ? "text-green-500" : "text-red-500"
        }`}
      >
        R$ {value}
      </strong>
    </div>
  </div>
);

//  box-shadow: 3px 3px 1px 0px #d97d7d;
//  border: 1px solid red;
