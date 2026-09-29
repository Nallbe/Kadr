import { Outlet } from "react-router-dom";

import { Header } from "@/src/widgets/header";
import "@/src/app/index.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
