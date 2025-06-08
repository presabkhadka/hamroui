import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Components from "./pages/Components";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  return (
    <div>
      <ThemeProvider>
        <RouterProvider
          router={createBrowserRouter([
            { path: "/", element: <Landing /> },
            { path: "/components", element: <Components /> },
          ])}
        ></RouterProvider>
      </ThemeProvider>
    </div>
  );
}
