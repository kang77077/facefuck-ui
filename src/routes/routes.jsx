import Login from "../pages/Login";

export default function getRoutes() {
  return [
    {
      path: "/",
      element: <Login/>,
    },
  ]
}