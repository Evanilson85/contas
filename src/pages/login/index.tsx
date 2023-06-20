import { NavLink, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("oi");
    navigate("/home");
  };

  return (
    <>
      <div className="bg-gradient-to-r from-violet-500  to-blue-500 min-h-screen w-full relative">
        <div className="h-4/5 bg-white absolute bottom-0 w-full rounded-t-lg p-4">
          <div>
            <h1 className="font-Nunito font-extrabold text-5xl text-textLogin mb-2">
              Bem vindo
            </h1>
            <h3 className="font-roboto font-medium text-1xl via-black mb-2">
              Sistema finaceiro conjunto
            </h3>
          </div>
          <form
            action=""
            className="flex flex-col w-full mt-8"
            onSubmit={login}
          >
            <label
              htmlFor="email"
              className="font-roboto font-medium text-textLogin text-1xl"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-input text-textInput border-zinc-700 h-14 rounded-lg px-3 my-2 font-roboto font-extrabold"
            />

            <label
              htmlFor="password"
              className="font-roboto font-medium text-textLogin mt-3 text-1xl"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="bg-input text-textInput border-zinc-700 h-14 rounded-lg px-3 my-2 font-roboto font-extrabold"
            />

            <button className="bg-gradient-to-r from-violet-500  to-blue-500 text-white border-zinc-700 h-14 rounded-lg px-3 mt-10 font-roboto font-extrabold">
              Acessar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
