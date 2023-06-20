import { BrowserRouter } from "react-router-dom";
import Routes from "./router/router.tsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
