import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router";
import "./index.css";
import "./assets/fonts.css";
import { MainProvider } from "./context/MainContext";

createRoot(document.getElementById("root")).render(
  <MainProvider>
    <RouterProvider router={router} />
  </MainProvider>
);
