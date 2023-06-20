import { VscAccount } from "react-icons/vsc";
// import { froGrConfigurem } from "react-icons/gi";

export const SubHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <VscAccount size={24} color="#fff" />
      </div>
      <select name="" id="" className="bg-transparent text-gray-50">
        <option value="">Janeiro</option>
        <option value="">Fevereiro</option>
        <option value="">Março</option>
        <option value="">Abril</option>
      </select>
      <div>{/* <froGrConfigurem /> */}</div>
    </div>
  );
};
