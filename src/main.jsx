import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router";
import "./index.css";

import { MainProvider } from "./context/MainContext";
import { ConfigProvider } from "./context/ConfigContext";

createRoot(document.getElementById("root")).render(
  <ConfigProvider>
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  </ConfigProvider>
);
