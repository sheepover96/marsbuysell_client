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
        <Route path={`/purchase/:id`} element={<Purchase />} />
        <Route path={`/thanks/`} element={<Thanks />} />
        <Route path={`/*/`} element={<NotFound />} />
      </Routes>
      <div style={{ height: '200px' }}/>
    </BrowserRouter>
  );
};

export default App;
