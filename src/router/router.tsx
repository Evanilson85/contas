import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login/index";
import { Home } from "../pages/Home/index";
import { DefaultHeader } from "../layout/DefaultHeader";
import { CreateCard } from "../pages/CreateCard";
import { CreateFinance } from "@/pages/createFinance";
// import Route from "./Router"
// import Register from '../views/Register'
// import Home from '../views/Home'
// import Profile from '../views/Profile'

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<DefaultHeader />}>
        <Route path="/" element={<Home />} />
        <Route path="/createCard" element={<CreateCard />} />
        <Route path="/createFinance" element={<CreateFinance />} />
      </Route>
      {/* // <Route exact path='/register' component={Register} />
        // <Route exact path='/home' isPrivate component={Home} />
        // <Route exact path='/profile' isPrivate component={Profile} /> */}
    </Routes>
  );
};

export default Router;
