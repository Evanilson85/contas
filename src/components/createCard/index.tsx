import { GrFormAdd } from "react-icons/gr";
import { GoCheck } from "react-icons/go";

export const CreateCardComponent = () => (
  <div>
    <form action="" className="p-2">
      <div className="flex items-center justify-center flex-col my-4 ">
        <input
          type="text"
          name="value"
          id="value"
          className="bg-[#e2e8f0] flex flex-col items-center h-[40px] justify-center rounded"
        />
        <label htmlFor="value">Limete do cartão</label>
      </div>
      <div className="my-4">
        <label htmlFor="name">Nome do cartão</label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-[#e2e8f0] flex flex-col items-center h-[40px] justify-center rounded w-full"
        />
      </div>
      <div className="my-4">
        <label htmlFor="icon">Escolha o icone</label>
        <div className="relative flex items-center">
          <button className="bg-[#e2e8f0] flex flex-col items-center h-[40px] w-[40px] justify-center items-center rounded-person">
            <GrFormAdd className="" size={24} />
          </button>
        </div>
      </div>
      <div className="my-4 flex justify-between">
        <div>
          <label htmlFor="">Fecha dia</label>
          <p className="bg-[#e2e8f0] flex flex-col items-center h-[40px] justify-center rounded">
            1
          </p>
        </div>
        <div>
          <label htmlFor="">Vence dia</label>
          <p className="bg-[#e2e8f0] flex flex-col items-center h-[40px] justify-center rounded">
            3
          </p>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="h-[40px] bg-green-200 text-green-95000 w-full rounded flex items-center justify-center"
        >
          <p className="text-green-950 mx-2">Salvar</p>
          {/* <GoCheck size={24} className="text-green-950" /> */}
        </button>
      </div>
    </form>
  </div>
);
