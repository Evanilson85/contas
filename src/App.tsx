import { BrowserRouter } from "react-router-dom";
import Routes from "./router/router.tsx";
import { Login } from "./pages/login/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Login /> */}
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
