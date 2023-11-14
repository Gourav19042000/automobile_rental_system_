import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import Header from "./components/Header";
import Body from "./components/Body";
//import Apicall from './components/api';
//import MyForm from './components/putform';
import SignInPage from "./components/SignInPage";
import Footer from "./components/Footer";
import SuccessMessage from "./components/SignupSuccess";
import AutoMobile from "./components/Automobile";

function App() {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/signIn",
        element: <SignInPage />,
      },
      {
        path: "/signUp",
        element: <SignUpPage />,
      },
      {
        path: "/signUp/signUpSuccess",
        element: <SuccessMessage />,
      },
      {
        path:"/admin",
        element:<AutoMobile />
      }
    ],
  },
]);

export default AppRouter;
