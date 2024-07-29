import { RouterProvider } from "react-router-dom";
import { router } from "./routing/router";
import Footer from "./components/common/Footer";

function App() {
  return (<>
   <RouterProvider router={router}/>
    <Footer/>
  </>
   
  );
}

export default App;
