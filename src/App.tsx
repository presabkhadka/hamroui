import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Components from "./pages/Components";
import { ThemeProvider } from "./components/theme-provider";
import About from "./pages/About";

export default function App() {
  return (
    <div>
      <ThemeProvider>
        <RouterProvider
          router={createBrowserRouter([
            { path: "/", element: <Landing /> },
            { path: "/components", element: <Components /> },
            { path: "/about", element: <About /> },
          ])}
        ></RouterProvider>
      </ThemeProvider>
    </div>
  );
}
