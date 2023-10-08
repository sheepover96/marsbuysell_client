import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Purchase from "./Purchase";
import Thanks from "./Thanks";
import NotFound from "./NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/purchase/`} element={<Purchase />} />
        <Route path={`/thanks/`} element={<Thanks />} />
        <Route path={`/*/`} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;