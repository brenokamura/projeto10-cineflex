import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "../assets/css/GlobalStyle";
import Header from "./Header";
import Movies from "./Movies";
import Sessions from "./Sessions";
import Seats from "./Seats";
import Success from "./Success";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Movies />}></Route>
        <Route path="/sessoes/:idMovie" element={<Sessions />}></Route>
        <Route path="/assentos/:idSessao" element={<Seats />}></Route>
        <Route path="/sucesso" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}