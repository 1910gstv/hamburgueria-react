import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/home'
import { Orders } from './pages/order' 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/order" component={<Orders />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
