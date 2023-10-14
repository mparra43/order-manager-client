import 'react-toastify/dist/ReactToastify.css'
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          {/* <Spinner /> */}
        </div>
      }
    >
      <BrowserRouter>
      <ToastContainer position='top-right' />
        <AppRoutes />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
